import { Card } from './card.ts';

export class BoosterPack {
	public id: number;
	public name: string;
	public picture: string;
	public cards: Array<Card['id']>;

	constructor(
		id: number,
		name: string,
		picture: string,
		cards: Array<Card['id']>,
	) {
		this.id = id;
		this.name = name;
		this.picture = picture;
		this.cards = cards;
	}
}
