import { Database as BaseDatabase } from '@vaaas/fs-kv-db';
import { Serialiser } from './serialiser.ts';
import { DBConfig } from '../config.ts';

export class Database extends BaseDatabase {
	constructor(
		config: DBConfig,
		serialiser: Serialiser,
	) {
		super(
			config.pathname,
			serialiser.serialise.bind(serialiser),
			serialiser.deserialise.bind(serialiser),
		);
	}

	static dependencies() {
		return [
			DBConfig,
			Serialiser,
		] as const;
	}
}
