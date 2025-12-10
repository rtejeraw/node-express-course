const { writeFile, readFile } = require("fs").promises;

writeFile("./temporary/temp.txt", "Raul\n")
	.then(() => {
		return writeFile("./temporary/temp.txt", "Tejera\n", { flag: "a" });
	})
	.then(() => {
		return writeFile("./temporary/temp.txt", "42\n", { flag: "a" });
	})
	.then(() => {
		return readFile("./temporary/temp.txt");
	})
	.then((value) => {
		console.log(value.toString());
	})
	.catch((error) => {
		console.log("An error occurred: ", error);
	});
