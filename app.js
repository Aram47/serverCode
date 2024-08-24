const express = require('express');
const app = express();

app.get('/test', (req, res) => {
	console.log("get request url -> /test");
	res.status(200).send("Yuhouuuu res from get req url -> /test");
});

app.post('/test', (req, res) => {
	console.log("post request url -> /test");
	console.log(req.headers);
	console.log(req.body);
	res.status(200).send("Tash tash tash res from post req url -> /test");
});

app.listen(4450);
