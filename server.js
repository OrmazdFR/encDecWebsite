'use strict';
const express = require('express');
var SHA256 = require("crypto-js/sha256");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	const mainHTML = 'Select the hash algorithm:<br><a href="sha256">SHA256</a>'
	res.send(mainHTML);
});

app.get('/sha256', (req, res) => {
	const sha256HTML = 'Your text to hash: <input name="toHash" type="text"></input><button onClick="hashSHA256">Hash</button><br>Hash result:<span id="hashResult">empty</span>'
	res.send(sha256HTML);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


function hashSHA256() {
	hrSpan = document.getElementById("hashResult").innerHTML;
	hrSpan.innerHTML = "detected but not ready yet (to implement)";
}