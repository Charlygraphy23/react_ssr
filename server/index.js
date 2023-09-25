const express = require("express");
const path = require("path");
const fs = require("fs");
const { cwd } = require("process");
const { renderToString } = require("react-dom/server");
const React = require("react");

const app = express();

app.get("/", async (req, res) => {
	const Component = (await import("../client/src/app")).default;

	const file = fs.readFileSync(
		path.resolve(cwd(), "..", "client/build/index.html"),
		"utf8"
	);
	const template = file.replace(
		'<div id="root"></div>',
		`<div id="root">${renderToString(<Component />)}</div>`
	);

	return res.send(template);
});

app.use(express.static(path.resolve(cwd(), "..", "client/build")));
app.listen(3000, () => {
	console.log("listening on port 3000");
});
