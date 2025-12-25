const express = require("express");
const router = express.Router();

const {
	addPerson,
	getPeople,
	updatePerson,
	deletePerson,
} = require("../controllers/people.js");

router.get("/", getPeople);
router.get("/:id", getPeople);
router.put("/:id", updatePerson);
router.post("/", addPerson);
router.delete("/:id", deletePerson);

module.exports = router;
