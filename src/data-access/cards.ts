import { Collection } from '../database/collection.ts';
import { Database } from '../database/database.ts';
import { Card, CardEntry } from '../entities/card.ts';

export class CardRepository {
	private collection: Collection<CardEntry>;

	constructor(db: Database) {
		this.collection = db.collection('cards');
	}

	store(x: Card): void {
		this.collection.add(x.toJSON());
	}

	delete(x: Card): void {
		const entry = this.collection.find(y => x.id === y.id);
		if (entry)
			this.collection.delete(entry);
	}

	get(x: Card['id']): Card | undefined {
		const entry = this.collection.find(y => y.id === x);
		if (entry)
			return Card.fromJSON(entry);
		else
			return undefined;
	}
}
