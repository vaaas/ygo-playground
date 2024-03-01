import { Database } from '@vaaas/fs-kv-db';
import { Serialiser } from '@vaaas/class-serialisation';
import { DataAccess } from './data-access/index.ts';
import { AuthService } from './auth/index.ts';
import { Controllers } from './controllers/index.ts';
import { Config } from '../config.ts';
import * as entities from './entities/index.ts';

export class App {
	public db: Database;
	public data_access: DataAccess;
	public auth: AuthService;
	public controllers: Controllers;

	constructor(config: Config) {
		const serialiser = Serialiser(
			entities.BoosterPack,
			entities.Card,
			entities.Deck,
			entities.Game,
			entities.User,
		);

		this.db = new Database(
			config.db.pathname,
			serialiser.serialise,
			serialiser.deserialise,
		);

		this.data_access = new DataAccess(this.db);
		this.auth = new AuthService(this.data_access.users);
		this.controllers = new Controllers(this.db, this.data_access);
	}
}
