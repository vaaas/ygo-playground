import { Collection } from '@vaaas/fs-kv-db';
import { Database } from '../database.ts';
import { BoosterPack } from '../entities/index.ts';

export class BoosterPackRepository {
	private db: Collection;

	constructor(db: Database) {
		this.db = db.collection('booster-packs');
	}

	static dependencies() {
		return [Database] as const;
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

	id(): number {
		return this.db.id();
	}
}
