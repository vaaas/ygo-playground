import { Collection } from '@vaaas/fs-kv-db';
import { Database } from '../database.ts';
import { User } from '../entities/index.ts';
import { find } from '../util/iter.ts';

export class UserRepository {
	private db: Collection;

	constructor(db: Database) {
		this.db = db.collection('users');
	}

	static dependencies() {
		return [Database] as const;
	}

	authenticate(name: string, password: string): User | undefined {
		return find(
			this.db,
			x => x instanceof User && x.name === name && x.password === password
		) as any;
	}

	id(): number {
		return this.db.id();
	}
}
