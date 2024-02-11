import { Card } from './card.ts';
import { Deck } from './deck.ts';

export class User {
	public id: number;
	public name: string;
	public password: string;
	public cards: Array<Card['id']>;
	public decks: Array<Deck['id']>;
	public purchase_points: number;
}
