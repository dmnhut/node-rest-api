require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const subscribersRouters = require('./routes/subscribers')
app.use('/subscribers', subscribersRouters)

app.listen(3000, () => console.log('server started'))