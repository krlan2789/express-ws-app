const DB = require("../model/db");
const DateHelper = require("./date_helper");

module.exports = class RecordLogHandler {
	/**
	 * Insert log to table websocket_log
	 * @param {string} token
	 * @param {string} message
	 * @returns
	 */
	static async insert(errorCode, message) {
		const values = [errorCode, message, DateHelper.getCurrentDate()];
		const query = `
			INSERT INTO websocket_log
			(token, message, date_created)
			VALUES
			($1, $2, $3)
			RETURNING *
		`;

		const result = (await DB.query(query, values)).rows;
		return result;
	}
};
