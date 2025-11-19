const http = require("http");

const request = (request, response) => {
	switch (request.url) {
		case "/":
			response.end("Welcome to our home page");
			break;
		case "/about":
			response.end("Here is our short history");
			break;
		default:
			response.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>
      `);
			break;
	}
};

const server = http.createServer(request);
server.listen(3000);
