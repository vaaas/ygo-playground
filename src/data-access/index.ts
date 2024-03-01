export { CardRepository } from './cards.ts';
export { UserRepository } from './users.ts';

import { Database } from '@vaaas/fs-kv-db';
import { CardRepository } from './cards.ts';
import { UserRepository } from './users.ts';
import { BoosterPackRepository } from './booster-packs.ts';

export class DataAccess {
	public booster_packs: BoosterPackRepository;
	public cards: CardRepository;
	public users: UserRepository;

	constructor(db: Database) {
		this.booster_packs = new BoosterPackRepository(db);
		this.cards = new CardRepository(db);
		this.users = new UserRepository(db);
	}
}
