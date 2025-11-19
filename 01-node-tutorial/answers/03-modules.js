const data = require("./04-names.js");
const print = require("./05-utils.js");
const dataAlternative = require("./06-alternative-flavor.js");

print(`${data.name} ${data.lastName} is ${data.age} years old.`);

print(
	`${dataAlternative.name} ${dataAlternative.lastName} is ${dataAlternative.age} years old.`
);

require("./07-mind-grenade.js");
