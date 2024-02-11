import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { minutes } from '../util/time.ts';
import { Collection } from './collection.ts';

export class Database {
	private data: Record<string, Array<any>>;
	private pathname: string;
	private dirty: boolean;

	constructor(pathname: string) {
		this.pathname = pathname;
		this.dirty = false;
		this.data = {};
		if (existsSync(pathname)) {
			this.data = JSON.parse(readFileSync(this.pathname).toString('utf-8'));
		} else {
			this.data = {};
			writeFileSync(this.pathname, JSON.stringify(this.data, undefined, 4));
		}

		setInterval(this.sync.bind(this), minutes(5));
	}

	mark_dirty(): void {
		this.dirty = true;
	}

	private sync(): void {
		if (!this.dirty)
			return;
		writeFileSync(this.pathname, JSON.stringify(this.data, undefined, 4));
		this.dirty = false;
	}

	collection<T extends Record<string, any>>(name: string): Collection<T> {
		if (!this.data.hasOwnProperty(name)) {
			this.data[name] = [];
			this.mark_dirty();
		}
		return new Collection<T>(this, this.data[name]);
	}
}
