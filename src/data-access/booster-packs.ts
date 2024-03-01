import { Database } from '@vaaas/fs-kv-db';
import { BoosterPack } from '../entities/index.ts';

export class BoosterPackRepository {
	private db: Database;

	constructor(db: Database) {
		this.db = db;
	}

	store(x: BoosterPack): void {
		this.db.write(x.id, x);
	}

	delete(x: BoosterPack): void {
		this.db.delete(x.id);
	}

	get(x: BoosterPack['id']): BoosterPack | undefined {
		return this.db.read<BoosterPack>(x);
	}
}
