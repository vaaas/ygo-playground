import { IncomingMessage } from 'http';
import { BoosterPackRepository } from '../data-access/booster-packs.ts';
import { read_post_data_as_json } from '../http/post-data.ts';
import { create_request_validator, patch_request_validator } from './validators.ts';
import { BoosterPack } from '../entities/booster-pack.ts';
import { NotFound } from '../http/errors.ts';
import { Database } from '../database.ts';

export class BoosterPackController {
	private repo: BoosterPackRepository;

	constructor(repo: BoosterPackRepository) {
		this.repo = repo;
	}

	static dependencies() {
		return [
			BoosterPackRepository,
			Database
		] as const;
	}

	async create(req: IncomingMessage) {
		const data = await read_post_data_as_json(req)
			.then(create_request_validator);
		const pack = new BoosterPack(this.repo.id(), data.name, data.picture, []);
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
