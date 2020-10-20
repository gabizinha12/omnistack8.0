const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
const server = express();


mongoose.connect('mongodb+srv://omnistack:gabizinha12@cluster0.uxwtd.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333);