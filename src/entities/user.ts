import { Card } from './card.ts';
import { Deck } from './deck.ts';

export type UserEntry = {
	id: number;
	name: string;
	password: string;
	cards: Array<Card['id']>;
	decks: Array<Deck['id']>;
	purchase_points: number;
}

export class User {
	public id: number;
	public name: string;
	public password: string;
	public cards: Array<Card['id']>;
	public decks: Array<Deck['id']>;
	public purchase_points: number;

	constructor(
		id: User['id'],
		name: User['name'],
		password: User['password'],
		cards: User['cards'],
		decks: User['decks'],
		purchase_points: User['purchase_points'],
	) {
		this.id = id;
		this.name = name;
		this.password = password;
		this.cards = cards;
		this.decks = decks;
		this.purchase_points = purchase_points;
	}

	toJSON(): UserEntry {
		return {
			id: this.id,
			name: this.name,
			password: this.password,
			cards: this.cards,
			decks: this.decks,
			purchase_points: this.purchase_points,
		};
	}

	static fromJSON(x: UserEntry): User {
		return new User(
			x.id,
			x.name,
			x.password,
			x.cards,
			x.decks,
			x.purchase_points,
		);
	}
}
