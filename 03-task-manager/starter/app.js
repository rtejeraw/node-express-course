const connectDB = require("./db/connect");

const express = require("express");
const app = express();
const tasks = require("./routes/Tasks");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);

		app.listen(port, () => {
			console.log(`Server is running on http://localhost:${port}`);
		});
	} catch (error) {
		console.log("Failed to connect to the database", error);
	}
};

start();
