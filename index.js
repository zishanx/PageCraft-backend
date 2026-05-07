const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(() => { console.log("MongoDb connected") }).catch(err => console.log(err))

const projectRoutes = require('./routes/project')
app.use('/api/projects', projectRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.get("/", (req, res) => {
    res.send("Backend Running")
})