const express = require("express");
const createError = require("http-errors");
const { createServer } = require("http");
const { parse } = require("query-string");
const WebSocket = require("ws");
const { writeFile } = require("fs");

const ErrorHandler = require("./helper/error_handler");
const RecordLogHandler = require("./helper/record_log_handler");
const DateHelper = require("./helper/date_helper");

module.exports = class WSS {
	create() {
		const app = express();
		// catch 404 and forward to error handler
		app.use((req, res, next) => {
			console.log("Error handler called!");
			next(createError(404));
		});

		const server = createServer(app);
		server.on("error", function (err) {
			// Handle error
			console.log(__dirname + `/error/${DateHelper.getCurrentDate()}.txt`);
			writeFile(__dirname + `/error/${DateHelper.getCurrentDate()}.txt`, err.stack, (err) => {
				if (err) {
					console.log(err);
				}
				console.log("Error file saved");
			});
		});

		const wss = new WebSocket.Server({ server });
		const mapConnectedIp = new Map();

		// Broadcast to all.
		wss.broadcast = function broadcast(data) {
			wss.clients.forEach(function each(client) {
				console.log("Broadcast to all users!");
				client.send(data);
			});
		};

		wss.on("connection", function connection(ws, req) {
			try {
				const [_path, params] = req.url.split("?");
				const connParams = parse(params);
				const userId = connParams.id;

				console.log(`client ${userId} joined.`);
				console.log(connParams.data);
				wss.broadcast(`client ${userId} joined.`);

				mapConnectedIp.set(userId, ws);

				ws.on("error", (err) => {
					ErrorHandler.insert(err.name, err.message);
					console.log(err);
				});

				ws.on("message", function message(data) {
					if (typeof data === "string") {
						// client sent a string
						console.log("string received from client -> '" + data + "'");
						wss.broadcast(data);
					} else {
						// client sent a bytecode
						data = String.fromCharCode(...data);
						console.log("Message on string -> " + data);
						wss.broadcast(data);
					}

					ErrorHandler.insert(data, data);
				});

				ws.on("close", function close() {
					mapConnectedIp.delete(userId);
					console.log(`client ${userId} left.`);
					wss.broadcast(`client ${userId} left.`);
				});
			} catch (e) {
				ErrorHandler.insert(e.name, e.message);
			}
		});

		return server;
	}
};
