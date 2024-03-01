import { Card } from './card.ts';

export interface BoosterPackJSON {
	_type: 'BoosterPack',
	id: number,
	name: string,
	picture: string;
	cards: Array<number>;
}

export class BoosterPack {
	public static readonly type = 'BoosterPack';

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

	serialise(): BoosterPackJSON {
		return {
			_type: BoosterPack.type,
			id: this.id,
			name: this.name,
			picture: this.picture,
			cards: this.cards,
		};
	}

	static deserialise(x: BoosterPackJSON): BoosterPack {
		return new BoosterPack(x.id, x.name, x.picture, x.cards);
	}

	static is(x: unknown): x is BoosterPack {
		return x instanceof BoosterPack;
	}
}
