import { enumerate } from '../util/iter.ts';
import { Database } from './database.ts';

export class Collection<T extends Record<string, any>> {
	private database: Database;
	private data: Array<T>;

	constructor(
		database: Collection<T>['database'],
		data: Array<T>,
	) {
		this.database = database;
		this.data = data;
	}

	all(): ReadonlyArray<T> {
		return this.data;
	}

	add(x: T): void {
		this.data.push(x);
		this.database.mark_dirty();
	}

	delete(x: T): void {
		for (const [i, y] of enumerate(this.data))
			if (y === x) {
				this.data.splice(i, 1);
				this.database.mark_dirty();
				return;
			}
	}

	find(f: (x: T) => boolean): Readonly<T> | undefined {
		return this.data.find(f);
	}

	update(old: T, fresh: T): void {
		for (const k of Object.keys(fresh)) {
			// @ts-ignore
			old[k] = fresh[k];
		}
		this.database.mark_dirty();
	}
}
