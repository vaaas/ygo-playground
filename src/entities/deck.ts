import { Card } from './card.ts';

export interface DeckJSON {
	_type: 'Deck';
	id: number;
	name: string;
	cards: number[];
}

export class Deck {
	public static readonly type = 'Deck';

	public id: number;
	public name: string;
	public cards: Array<Card['id']>;

	constructor(
		id: Deck['id'],
		name: Deck['name'],
		cards: Deck['cards'],
	) {
		this.id = id;
		this.name = name;
		this.cards = cards;
	}

	serialise(): DeckJSON {
		return {
			_type: Deck.type,
			id: this.id,
			name: this.name,
			cards: this.cards,
		};
	}

	static deserialise(x: DeckJSON): Deck {
		return new Deck(x.id, x.name, x.cards);
	}

	static is(x: unknown): x is Deck {
		return x instanceof Deck;
	}
}
