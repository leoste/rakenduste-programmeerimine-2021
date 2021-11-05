const Title = require('../models/Title')

exports.getTitles = async (req, res) => {
  const titles = await Title.find({})

  res.status(200).send(titles)
}

exports.createTitle = async (req, res) => {
  const {title, authorId} = req.body

  const newTitle = {
    title,
    authorId,
  }

  const createdTitle = new Title(newTitle)

  const savedTitle = await createdTitle.save()

  res.status(200).send(savedTitle)
}

exports.updateTitle = async (req, res) => {
  const { id } = req.params;

  const title = await Title.findOneAndUpdate({ _id: id }, req.body)

  if (!title) res.status(404).send("No title with that id found")

  const updatedTitle = await Title.findOne({ _id: id })

  res.status(200).send(`Successfully updated the following title: \n ${updatedTitle}`)
}

exports.deleteTitle = async (req, res) => {
  const { id } = req.params;

  const title = await Title.findOneAndDelete({ _id: id })

  if (!title) res.status(404).send("No title with that id found")

  res.status(200).send(`Successfully deleted the following title: \n ${title}`)
}