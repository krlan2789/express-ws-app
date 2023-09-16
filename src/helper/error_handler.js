const DB = require("../model/db");
const DateHelper = require("./date_helper");

module.exports = class ErrorHandler {
	/**
	 * Insert error log to table tb_error_log
	 * @param {string} errorCode
	 * @param {string} message
	 * @returns
	 */
	static async insert(errorCode, message) {
		const values = [errorCode, message, DateHelper.getCurrentDate()];
		const query = `
			INSERT INTO tb_error_log
			(error_code, message, date_created)
			VALUES
			($1, $2, $3)
			RETURNING *
		`;

		const result = (await DB.query(query, values)).rows;
		return result;
	}
};
