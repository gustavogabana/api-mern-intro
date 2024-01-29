import News from '../models/News.js'

const createService = (body) => News.create(body)

const findAllSevice = () => News.find()

export default { createService, findAllSevice }