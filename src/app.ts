import { DataAccess } from './data-access/index.ts';
import { AuthService } from './auth/index.ts';
import { Database } from './database/database.ts';
import { Config } from '../config.ts';

export class App {
	public db: Database;
	public data_access: DataAccess;
	public auth: AuthService;

	constructor(config: Config) {
		this.db = new Database(config.db.pathname);
		this.data_access = new DataAccess(this.db);
		this.auth = new AuthService(this.data_access.users);
	}
}
