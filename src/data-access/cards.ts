import { Database } from '../database.ts';
import { Card } from '../entities/index.ts';

export class CardRepository {
	private db: Database;

	constructor(db: Database) {
		this.db = db;
	}

	static dependencies() {
		return [Database] as const;
	}

	store(x: Card): void {
		this.db.write(x.id, x);
	}

	delete(x: Card): void {
		this.db.delete(x.id);
	}

	get(x: Card['id']): Card | undefined {
		return this.db.read<Card>(x);
	}
}
