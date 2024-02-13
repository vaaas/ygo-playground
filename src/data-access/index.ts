export { CardRepository } from './cards.ts';
export { UserRepository } from './users.ts';

import { Database } from '../database/database.ts';
import { CardRepository } from './cards.ts';
import { UserRepository } from './users.ts';

export class DataAccess {
	public cards: CardRepository;
	public users: UserRepository;

	constructor(db: Database) {
		this.cards = new CardRepository(db);
		this.users = new UserRepository(db);
	}
}
