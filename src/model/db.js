const pgsql = require("pg");

class DB {
	constructor() {
		this.client = new pgsql.Client({
			host: process.env.DB_HOST,
			user: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			port: process.env.DB_PORT | 5432,
		});
		this.client.connect();
	}

	async hasTable(table) {
		const hasTable = table == "" || table == null ? false : this.client.query(`SELECT to_regclass('schema_name.${table}');`);

		const data = { status: hasTable !== null && hasTable !== false, message: `table ${hasTable ? "" : "not"} found` };
		return Promise.resolve(data);
	}

	async query(query, values = null) {
		if (values != null) return await this.client.query(query, values);
		else return await this.client.query(query);
	}
}

module.exports = new DB();
