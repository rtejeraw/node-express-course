const { writeFile, readFile } = require("fs");

writeFile("./temporary/fileB.txt", "Raul\n", (err) => {
	if (err) {
		console.log("Error writing file: ", err);
	} else {
		writeFile("./temporary/fileB.txt", "Tejera\n", { flag: "a" }, (err) => {
			if (err) {
				console.log("Error writing file: ", err);
			} else {
				writeFile(
					"./temporary/fileB.txt",
					"42",
					{ flag: "a" },
					(err) => {
						if (err) {
							console.log("Error writing file: ", err);
						} else {
							readFile("./temporary/fileB.txt", (err, data) => {
								if (err) {
									console.error("Error reading file:", err);
									return;
								} else {
									console.log(data.toString());
								}
							});
						}
					}
				);
			}
		});
	}
});
