const express = require("express");
const createError = require("http-errors");
const { createServer } = require("http");
const { parse } = require("query-string");
const WebSocket = require("ws");
const { writeFile } = require("fs");

const ErrorHandler = require("./helper/error_handler");
const RecordLogHandler = require("./helper/record_log_handler");
const DateHelper = require("./helper/date_helper");
const ModelUsers = require("./model/m_users");

module.exports = class WSS {
	create() {
		const app = express();
		// catch 404 and forward to error handler
		app.use((req, res, next) => {
			console.log("Error handler called!");
			next(createError(404));
		});
		// catch 404 and forward to error handler

		const server = createServer(app);

		// Handle error
		server.on("error", function (err) {
			console.log(__dirname + `/error/${DateHelper.getCurrentDate()}.txt`);
			writeFile(__dirname + `/error/${DateHelper.getCurrentDate()}.txt`, err.stack, (err) => {
				if (err) {
					console.log(err);
				}
				console.log("Error file saved");
			});
		});
		// Handle error

		const wss = new WebSocket.Server({ server });
		const mapConnectedIp = new Map();

		// Broadcast to all.
		wss.broadcast = function broadcast(data) {
			wss.clients.forEach(function each(client) {
				console.log("Broadcast to all users!");
				client.send(data);
			});
		};
		// Broadcast to all.

		// On websocket user has connection open
		wss.on("connection", async function connection(ws, req) {
			try {
				const [_path, params] = req.url.split("?");
				const connParams = parse(params);
				const token = connParams.token;

				const isVerified = await ModelUsers.isVerified(token);

				if (!isVerified) {
					console.log("not_verified_user: " + token);
					ErrorHandler.insert("not_verified_user", token);
					ws.send("you are not permitted to use this feature");
					ws.close();
					return;
				}

				console.log(`client ${token} joined.`);
				console.log(connParams.data);
				wss.broadcast(`client ${token} joined.`);

				mapConnectedIp.set(token, ws);

				// On websocken has error
				ws.on("error", (err) => {
					ErrorHandler.insert(err.name, err.message);
					console.log(err);
				});
				// On websocken has error

				// On websocket has nicoming message
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

					RecordLogHandler.insert(data, data);
				});
				// On websocket has nicoming message

				// On websocket user has connection closed
				ws.on("close", function close() {
					mapConnectedIp.delete(token);
					console.log(`client ${token} left.`);
					wss.broadcast(`client ${token} left.`);
				});
				// On websocket user has connection closed
			} catch (e) {
				ErrorHandler.insert(e.name, e.message);
			}
		});
		// On websocket user has connection open

		return server;
	}
};
