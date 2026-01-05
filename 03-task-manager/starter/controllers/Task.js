const Task = require("../models/Tasks");

const getAllTasks = (req, res) => {
	res.json({ data: "All Tasks" });
};

const getTask = (req, res) => {
	res.json({ id: req.params.id });
};

const newTask = async (req, res) => {
	const task = await Task.create(req.body);

	res.status(201).json({ task });
};

const updateTask = (req, res) => {
	res.json({ id: req.params.id });
};

const deleteTask = (req, res) => {
	res.json({ id: req.params.id });
};

module.exports = {
	getAllTasks,
	getTask,
	newTask,
	updateTask,
	deleteTask,
};
