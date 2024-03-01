import { Database as BaseDatabase } from '@vaaas/fs-kv-db';
import { config, Config } from '../config.ts';
import { Serialiser } from './serialiser.ts';

export class Database extends BaseDatabase {
	constructor(
		config: Config,
		serialiser: Serialiser,
	) {
		super(
			config.db.pathname,
			serialiser.serialise.bind(serialiser),
			serialiser.deserialise.bind(serialiser),
		);
	}

	static dependencies() {
		return [
			config,
			Serialiser,
		] as const;
	}
}
