const mongoose = require('mongoose')

const trainSchema = mongoose.Schema({
  id: { type: String, require: true, unique: true },
  stops: { type: Array, require: true },
  from: { type: String, require: true },
  to: { type: String, require: true }
})

module.exports = mongoose.model('Train', trainSchema)
