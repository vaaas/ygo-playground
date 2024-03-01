export interface CardJSON {
	_type: 'Card';
	id: number;
	picture: string;
	description: string;
}

export class Card {
	public static readonly type = 'Card';

	public id: number;
	public picture: string;
	public description: string;

	constructor(
		id: Card['id'],
		picture: Card['picture'],
		description: Card['description'],
	) {
		this.id = id;
		this.picture = picture;
		this.description = description;
	}

	serialise(): CardJSON {
		return {
			_type: Card.type,
			id: this.id,
			picture: this.picture,
			description: this.description,
		};
	}

	static deserialise(x: CardJSON) {
		return new Card(x.id, x.picture, x.description);
	}

	static is(x: unknown): x is Card {
		return x instanceof Card;
	}
}
