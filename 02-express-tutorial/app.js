const express = require("express");
const app = express();

const { products } = require("./data");
const peopleRouter = require("./routes/people.js");
const productsRouter = require("./routes/products.js");

app.use(express.static("./public"));
// logger
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url} -- ${new Date().toISOString()}`);
	next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/v1/test", (req, res) => {
	res.json({ message: "It worked!" });
});

app.use("/api/v1/people", peopleRouter);

app.use("/api/v1/products", productsRouter);

app.get("/api/v1/query", (req, res) => {
	const limit = parseInt(req.query.limit);
	const search = req.query.search;
	const from = parseInt(req.query.from);
	const to = parseInt(req.query.to);

	let filteredProducts = products.filter((item) => {
		const matchSearch =
			!search || item.name.toLowerCase().includes(search.toLowerCase());

		const matchFrom = !from || item.price >= from;
		const matchTo = !to || item.price <= to;

		return matchSearch && matchFrom && matchTo;
	});

	if (filteredProducts.length === 0)
		return res.status(404).json({ message: "That product was not found." });

	res.json({
		products: limit ? filteredProducts.slice(0, limit) : filteredProducts,
	});
});

app.all("*", (req, res) => {
	res.status(404).send(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>
      `);
});

app.listen(3000);
console.log("Server is listening on port 3000...");
