const userService = require('../services/user.service')
const mongoose = require('mongoose')

const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body

    if (!name || !username || !email || !password || !avatar || !background) {
        return res.status(400).send({message: 'Submit all fields for registration'})
    }

    const user = await userService.createService(req.body)

    if (!user) {
        return res.status(400).send({message: 'Error creating User'})
    }

    return res.status(201).send({
        message: 'Created',
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background
        }
    })

}

const findAll = async (req, res) => {
    const users = await userService.findAllService()

    if (users.length === 0) {
        return res.status(400).send({message: 'There are no registered users'})
    }
    res.send(users)
}

const findById = async (req, res) => {

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({message: 'Invalid id'})
    }

    const user = await userService.findByIdService(req.params.id)

    if (!user) {
        return res.status(400).send({message: 'User not found by this id'})
    }
    res.send(user)
}

const update = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body

    if (!name && !username && !email && !password && !avatar && !background) {
        return res.status(400).send({message: 'Submit at least one field for update'})
    }

    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({message: 'Invalid id'})
    }

    const user = await userService.findByIdService(id)

    if (!user) {
        return res.status(400).send({message: 'User not found by this id'})
    }

    await userService.updateService(id, name, username, email, password, avatar, background)

    return res.status(200).send({message: 'User successfully updated'})

}

module.exports = { create, findAll, findById, update }