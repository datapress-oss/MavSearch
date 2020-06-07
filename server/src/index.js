const express = require('express')
const app = express()

const compression = require('compression')
const bodyParser = require('body-parser')

const port = 3000

const mongoose = require('mongoose')

app.use(compression())
app.use(bodyParser.json())
const train = require('./routers/train_route')
app.use('/train', train)

const start = async () => {
  try {
    const mongoDB = ''
    await mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))

    app.listen(port)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()