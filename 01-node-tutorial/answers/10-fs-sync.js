const { writeFileSync, readFileSync } = require("fs");

writeFileSync("./temporary/fileA.txt", "Raul\n");
writeFileSync("./temporary/fileA.txt", "Tejera\n", { flag: "a" });
writeFileSync("./temporary/fileA.txt", "42\n", { flag: "a" });

const file = readFileSync("./temporary/fileA.txt");
console.log(file.toString());
