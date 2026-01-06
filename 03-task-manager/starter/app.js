const connectDB = require("./db/connect");

const express = require("express");
const app = express();
const tasks = require("./routes/Tasks");

require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
	res.send("Task Manager API");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

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
