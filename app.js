require("dotenv").config();

const WSS = require("./src/wss.js");

const server = new WSS().create();

const port = process.env.CONNECTION_PORT | 8765;
server.listen(port, function () {
	console.log(`Listening on http://${process.env.DB_HOST}: ${port}`);
});
