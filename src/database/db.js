import mongoose from 'mongoose'

const connectDatabase = () => {
    console.log('Connecting to the database')
    mongoose.connect(
        'mongodb+srv://atlas:mongodbpassword@clusterzero.2b6pm84.mongodb.net/?retryWrites=true&w=majority', 
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch((error) => console.log(error))
}

export default connectDatabase