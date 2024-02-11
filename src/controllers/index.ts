import { StaticController } from './static.ts';

export class Controllers {
	static: StaticController;

	constructor() {
		this.static = new StaticController;
	}
}
