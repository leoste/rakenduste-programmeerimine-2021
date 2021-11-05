const { Schema, model } = require('mongoose')

const titleSchema = new Schema({
  title: { type: String, required: true },
  authorId: { type: String, required: true },
  lastModified: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});

const Title = model("Title", titleSchema)

module.exports = Title