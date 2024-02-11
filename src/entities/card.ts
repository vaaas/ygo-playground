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
}
