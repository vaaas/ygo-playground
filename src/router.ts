import { BoosterPackController } from './booster-packs/booster-pack-controller.ts';
import { StaticController } from './controllers/static.ts';
import { Router as BaseRouter } from './http/router.ts';

export class Router extends BaseRouter {
	constructor(
		staticfiles: StaticController,
		boosterpacks: BoosterPackController,
	) {
		super();
		this.get('/', () => staticfiles.index())
			.get('/**', (req) => staticfiles.file(req))
			.post('/booster-packs', (req) => boosterpacks.create(req))
			.patch('/pooster-packs', (req) => boosterpacks.patch(req));
	}

	static dependencies() {
		return [
			StaticController,
			BoosterPackController,
		] as const;
	}
}
