import { Card } from './card.ts';
import { Deck } from './deck.ts';

export interface UserJSON {
	_type: 'User';
	id: number;
	name: string;
	password: string;
	cards: Array<number>;
	decks: Array<number>;
	purchase_points: number;
}

export class User {
	public static readonly type = 'User';

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

	serialise(): UserJSON {
		return {
			_type: User.type,
			id: this.id,
			name: this.name,
			password: this.password,
			cards: this.cards,
			decks: this.decks,
			purchase_points: this.purchase_points,
		};
	}

	static deserialise(x: UserJSON): User {
		return new User(
			x.id,
			x.name,
			x.password,
			x.cards,
			x.decks,
			x.purchase_points,
		);
	}

	static is(x: unknown): x is User {
		return x instanceof User;
	}
}
