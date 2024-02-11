import { Card } from './card.ts';

export class Deck {
	public id: number;
	public name: string;
	public cards: Array<Card>;

	constructor(
		id: Deck['id'],
		name: Deck['name'],
		cards: Deck['cards'],
	) {
		this.id = id;
		this.name = name;
		this.cards = cards;
	}
}
