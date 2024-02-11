export class Game {
	id: number;
	playera: number;
	playerb: number;

	constructor(
		id: Game['id'],
		playera: Game['playera'],
		playerb: Game['playerb'],
	) {
		this.id = id;
		this.playera = playera;
		this.playerb = playerb;
	}
}
