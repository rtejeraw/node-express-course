const { createReadStream } = require("fs");

let chunkCount = 0;

const readStream = () => {
	const stream = createReadStream("./content/big.txt", {
		encoding: "utf-8",
		highWaterMark: 200,
	});

	stream.on("data", (chunk) => {
		chunkCount += 1;
		console.log(`${chunk}`);
	});
	stream.on("end", () => {
		console.log(`Total of ${chunkCount} chunks of data received.`);
	});
	stream.on("error", (err) => {
		console.error(`Stream ${chunkCount} error:`, err);
	});
};

readStream();
