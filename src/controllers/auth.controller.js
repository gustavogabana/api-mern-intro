import bcrypt from 'bcrypt'
import loginService from '../services/auth.service.js'

const login = async (req, res) => {
    try {
        const { email, password } = req
        const user = await loginService(email)
        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            return res.status(404).send({message: 'E-mail or Password not found'})
        }

        return res.status(200).send({message: 'Logged in'})
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}

export default login