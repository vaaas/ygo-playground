import { Database } from '@vaaas/fs-kv-db';
import { User } from '../entities/index.ts';
import { find } from '../util/iter.ts';

export class UserRepository {
	private db: Database;

	constructor(db: Database) {
		this.db = db;
	}

	authenticate(name: string, password: string): User | undefined {
		return find(
			this.db,
			x => x instanceof User && x.name === name && x.password === password
		) as any;
	}
}
