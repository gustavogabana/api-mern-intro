import { createService, findAllService } from '../services/news.service.js'

const create = async (req, res) => {
    try {

        const { title, text, banner } = req.body

        if (!title || !text || !banner) {
            res.status(400).send({message: 'Submit all fields for publication'})
        }

        await createService({ title, text, banner, id: 'object_id_fake' })

        return res.status(201).send({message: 'posted'})
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}

const findAll = (req, res) => {
    try {
        return res.status(200).send({message: 'getted'})
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}   

export default { create, findAll }