import { Database } from '@vaaas/fs-kv-db';
import { BoosterPackController } from '../booster-packs/booster-pack-controller.ts';
import { StaticController } from './static.ts';
import { DataAccess } from '../data-access/index.ts';

export class Controllers {
	static: StaticController;
	booster_packs: BoosterPackController;

	constructor(
		db: Database,
		data_access: DataAccess,
	) {
		this.static = new StaticController();
		this.booster_packs = new BoosterPackController(data_access.booster_packs, db);
	}
}
