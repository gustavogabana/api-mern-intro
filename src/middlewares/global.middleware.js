import mongoose from 'mongoose'
import userService from '../services/user.service.js'
import loginService from '../services/auth.service.js'

const validId = (req, res, next) => {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({message: 'Invalid id'})
        }
        next()
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}

const validUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await userService.findByIdService(id)
        if (!user) {
            return res.status(400).send({message: 'User not found by this id'})
        }
        req.id = id
        req.user = user
        next()
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const validEmail = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await loginService(email)
        if (!user) {
            return res.status(404).send({message: 'E-mail or Password not found'})
        }
        req.email = email
        req.password = password
        next()
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}

export default { validId, validUser, validEmail }