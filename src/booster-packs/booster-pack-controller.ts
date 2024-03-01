import { IncomingMessage } from 'http';
import { BoosterPackRepository } from '../data-access/booster-packs.ts';
import { read_post_data_as_json } from '../http/post-data.ts';
import { create_request_validator, patch_request_validator } from './validators.ts';
import { BoosterPack } from '../entities/booster-pack.ts';
import { Database } from '@vaaas/fs-kv-db';
import { NotFound } from '../http/errors.ts';

export class BoosterPackController {
	private repo: BoosterPackRepository;
	private db: Database;

	constructor(
		repo: BoosterPackRepository,
		db: Database,
	) {
		this.repo = repo;
		this.db = db;
	}

	async create(req: IncomingMessage) {
		const data = await read_post_data_as_json(req)
			.then(create_request_validator);
		const pack = new BoosterPack(this.db.id(), data.name, data.picture, []);
		this.repo.store(pack);
	}

	async patch(req: IncomingMessage) {
		const data = await read_post_data_as_json(req)
			.then(patch_request_validator);
		const pack = this.repo.get(data.id);
		if (!pack)
			throw new NotFound();
		const updated = pack.patch(data);
		this.repo.store(updated);
	}
}
