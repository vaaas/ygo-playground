export interface GameJSON {
	_type: 'Game';
	id: number;
	playera: number;
	playerb: number;
}

export class Game {
	public static readonly type = 'Game';

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

	serialise(): GameJSON {
		return {
			_type: Game.type,
			id: this.id,
			playera: this.playera,
			playerb: this.playerb,
		};
	}

	static deserialise(x: GameJSON): Game {
		return new Game(x.id, x.playera, x.playerb);
	}

	static is(x: unknown): x is Game {
		return x instanceof Game;
	}
}
