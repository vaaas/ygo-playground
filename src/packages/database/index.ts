import {
	readFileSync,
	readdirSync,
	unlinkSync,
	writeFileSync,
	mkdirSync,
	accessSync,
	constants,
} from 'node:fs';

export class Collection {
	private directory: string;
	private serialise: (x: any) => string;
	private deserialise: (x: string) => unknown;
	private max_id: number;

	constructor(
		directory: Collection['directory'],
		serialise: Collection['serialise'],
		deserialise: Collection['deserialise'],
	) {
		this.directory = directory;
		this.serialise = serialise;
		this.deserialise = deserialise;

		try {
			accessSync(this.directory, constants.F_OK);
		} catch (e) {
			mkdirSync(this.directory);
		}

		this.max_id = this.ids().reduce((a, b) => Math.max(a, b), 0);

	}

	write(k: number, v: any): void {
		writeFileSync(this.directory + '/' + k, this.serialise(v));
	}

	read<T = unknown>(k: number): T | undefined {
		try {
			return this.deserialise(readFileSync(this.directory + '/' + k).toString('utf-8')) as any;
		} catch(e) {
			// @ts-ignore
			if (e instanceof Error && e.code === 'ENOENT')
				return undefined;
			else
				throw e;
		}
	}

	delete(k: number): void {
		unlinkSync(this.directory + '/' + k);
	}

	private ids(): Array<number> {
		return readdirSync(this.directory).map(parseFloat);
	}

	id() {
		return ++this.max_id;
	}

	[Symbol.iterator]() {
		const ids = this.ids().sort((a, b) => a - b);
		const len = ids.length;
		let i = 0;
		const next = () => {
			if (i < len) {
				const value = this.read(ids[i]);
				i++;
				return { value, done: false };
			} else
				return { value: undefined, done: true };
		}

		return { next };
	}
}

export class Database {
	private directory: string;
	private serialise: (x: any) => string;
	private deserialise: (x: string) => unknown;

	constructor(
		directory: Collection['directory'],
		serialise: Collection['serialise'],
		deserialise: Collection['deserialise'],
	) {
		this.directory = directory;
		this.serialise = serialise;
		this.deserialise = deserialise;
	}

	collection(name: string): Collection {
		return new Collection(this.directory + '/' + name, this.serialise, this.deserialise);
	}
}
