const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TodoSchema = new Schema({
  todo: {type: String, required: true, max: 400}
})

module.exports = mongoose.model('Todo', TodoSchema)