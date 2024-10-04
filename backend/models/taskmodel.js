const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
  taskname: {
    type: String,
    required: true
  },
  duedate: {
    type: String,
    required: true
  },
  priority: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('task', taskSchema)