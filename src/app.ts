import { DataAccess } from './data-access/index.ts';
import { AuthService } from './auth/index.ts';
import { Database } from './database/database.ts';
import { Config } from 'ygo-playground/config';
import { Controllers } from './controllers/index.ts';

export class App {
	public db: Database;
	public data_access: DataAccess;
	public auth: AuthService;
	public controllers: Controllers;

	constructor(config: Config) {
		this.db = new Database(config.db.pathname);
		this.data_access = new DataAccess(this.db);
		this.auth = new AuthService(this.data_access.users);
		this.controllers = new Controllers();
	}
}
