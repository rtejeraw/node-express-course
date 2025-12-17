const { people } = require("../data");

const getPeople = (req, res) => {
	if (req.params.id) {
		const personId = parseInt(req.params.id);
		const person = people.find((x) => x.id === personId);
		if (!person) {
			return res.status(404).json({ message: "Person was not found." });
		}
		return res.json(person);
	}
	res.json(people);
};

const addPerson = (req, res) => {
	if (!req.body.name) {
		return res
			.status(400)
			.json({ success: false, msg: "Please provide a name" });
	}

	people.push({ id: people.length + 1, name: req.body.name });
	res.status(201).json({ success: true, name: req.body.name });
};

const updatePerson = (req, res) => {
	const personId = parseInt(req.params.id);
	const person = people.find((x) => x.id === personId);
	if (!person) {
		return res.status(404).json({ message: "Person was not found." });
	}
	const { name } = req.body;
	person.name = name;
	res.json({ success: true, person });
};

const deletePerson = (req, res) => {
	const personId = parseInt(req.params.id);
	const person = people.find((x) => x.id === personId);
	if (!person) {
		return res.status(404).json({ message: "Person was not found." });
	}

	const personIndex = people.findIndex((x) => x.id === personId);
	people.splice(personIndex, 1);
	res.json({ success: true, message: "Person deleted." });
};

module.exports = { getPeople, addPerson, updatePerson, deletePerson };
