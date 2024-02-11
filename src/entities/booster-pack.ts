import { Card } from './card.ts';

export class BoosterPack {
	public id: number;
	public name: string;
	public picture: string;
	public cards: Array<Card['id']>;
}
