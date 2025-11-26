const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
	try {
		await writeFile("./temporary/temp.txt", "Raul\n");
		await writeFile("./temporary/temp.txt", "Tejera\n", { flag: "a" });
		await writeFile("./temporary/temp.txt", "42\n", { flag: "a" });
	} catch (error) {
		console.log("An error occurred: ", error);
	}
};

const reader = async () => {
	try {
		const value = await readFile("./temporary/temp.txt");
		console.log(value.toString());
	} catch (error) {
		console.log("An error occurred: ", error);
	}
};

const readWrite = async () => {
	await writer();
	await reader();
};

readWrite();
