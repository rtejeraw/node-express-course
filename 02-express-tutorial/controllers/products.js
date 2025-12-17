const { products } = require("../data");

const getProducts = (req, res) => {
	if (req.params.id) {
		const productId = parseInt(req.params.id);
		const product = products.find((x) => x.id === productId);
		if (!product) {
			return res
				.status(404)
				.json({ message: "That product was not found." });
		}
		return res.json(product);
	}
	res.json(products);
};

module.exports = { getProducts };
