import { createService, findAllService } from '../services/news.service.js'

const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body

        if (!title || !text || !banner) {
            res.status(400).send({message: 'Submit all fields for publication'})
        }

        await createService({ title, text, banner, user: { _id: '65b052f4ebfe8283124978b0' }})

        return res.status(201).send({message: 'posted'})
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}

const findAll = async (req, res) => {
    try {
        const news = await findAllService()

        if (news.length === 0) {
            return res.status(400).send({message: 'There are no content posted'})
        }

        return res.status(200).send(news)
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}   

export { create, findAll }