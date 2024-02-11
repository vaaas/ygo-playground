export type CardEntry = {
	id: number;
	picture: string;
	description: string;
}

export class Card {
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

	toJSON(): CardEntry {
		return {
			id: this.id,
			picture: this.picture,
			description: this.description,
		};
	}

	static fromJSON(x: CardEntry) {
		return new Card(x.id, x.picture, x.description);
	}
}
