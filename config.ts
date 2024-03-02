export class Config {
	readonly http: HttpConfig;
	readonly db: DBConfig;

	constructor(
		http: HttpConfig,
		db: DBConfig,
	) {
		this.http = http;
		this.db = db;
	}

	static dependencies() {
		return [
			HttpConfig,
			DBConfig,
		]
	}
}

export class HttpConfig {
	readonly port: number;

	constructor() {
		this.port = 8000;
	}
}

export class DBConfig {
	readonly pathname: string;

	constructor() {
		this.pathname = 'shared';
	}
}
