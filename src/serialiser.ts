import * as entities from './entities/index.ts';
import { Serialiser as BaseSerialiser } from '@vaaas/class-serialisation';

export class Serialiser extends BaseSerialiser {
	constructor() {
		super(
			entities.BoosterPack,
			entities.Card,
			entities.Deck,
			entities.Game,
			entities.User,
		);
	}
}
