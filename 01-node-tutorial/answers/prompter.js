const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
	const decode = new StringDecoder("utf-8");
	let body = "";
	req.on("data", function (data) {
		body += decode.write(data);
	});
	req.on("end", function () {
		body += decode.end();
		const body1 = decodeURI(body);
		const bodyArray = body1.split("&");
		const resultHash = {};
		bodyArray.forEach((part) => {
			const partArray = part.split("=");
			resultHash[partArray[0]] = partArray[1];
		});
		callback(resultHash);
	});
};

// here, you could declare one or more variables to store what comes back from the form.
let item = "Enter something below.";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
	return `
  <body>
  <p>${item}</p>
  <form method="POST">
  <div style="display: flex; flex-direction: column; gap: 0px; align-items: flex-start;">
    <div style="display: flex; gap: 10px; align-items: center;"><h4 style="margin: 0px">Name:</h4><input name="name"></input></div>
    <div style="display: flex; gap: 10px; align-items: center;"><h4 style="margin: 0px">Lastname:</h4><input name="lastName"></input></div>
    <div style="display: flex; gap: 10px; align-items: center;"><h4 style="margin: 0px">Age:</h4><input type="number" name="age" min="1" max="100"></div>
    <button type="submit">Submit</button>
  </div>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
	console.log("req.method is ", req.method);
	console.log("req.url is ", req.url);
	if (req.method === "POST") {
		getBody(req, (body) => {
			console.log("The body of the post is ", body);
			// here, you can add your own logic
			if (body["name"] && body["lastName"] && body["age"]) {
				item = `${body["name"]} ${body["lastName"]} is ${body["age"]} years old.`;
			} else {
				item = "More data is needed.";
			}
			// Your code changes would end here
			res.writeHead(303, {
				Location: "/",
			});
			res.end();
		});
	} else {
		res.end(form());
	}
});

server.listen(3000);
console.log("The server is listening on port 3000.");
