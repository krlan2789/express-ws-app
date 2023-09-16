module.exports = class DateHelper {
	/**
	 * Convert to passed TimeZone
	 * @param {string} date
	 * @param {string} tzString
	 * @returns
	 */
	static convertTZ(date, tzString) {
		return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
	}

	/**
	 * Get local date string with format yyyy-MM-dd hh-mm-ss
	 * @returns {string} yyyy-MM-dd hh-mm-ss
	 */
	static getCurrentDate() {
		const ts = new Date();
		const date_ob = this.convertTZ(ts, "Asia/Jakarta"); // current date-time in jakarta.
		const year = date_ob.getFullYear();
		const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
		const day = ("0" + date_ob.getDate()).slice(-2);
		const hour = ("0" + date_ob.getHours()).slice(-2);
		const minute = ("0" + date_ob.getMinutes()).slice(-2);
		const seconds = ("0" + date_ob.getSeconds()).slice(-2);
		return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
	}
};
