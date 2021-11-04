const router = require("express").Router()
const titleController = require("../controllers/title")

router.get("/", titleController.getTitles)
router.post("/create", titleController.createTitle)
router.put("/update/:id", titleController.updateTitle)
router.delete("/delete/:id", titleController.deleteTitle)

module.exports = router