const express = require("express");
const router = express.Router();

const {
	getAllTasks,
	getTask,
	newTask,
	updateTask,
	deleteTask,
} = require("../controllers/Task");

router.route("/").get(getAllTasks).post(newTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
