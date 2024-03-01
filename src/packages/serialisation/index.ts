export interface Serialised {
	_type: string;
	[k: string]: any;
}

export interface Serialiseable {
	serialise(): Serialised;
}

export interface Deserialiseable {
	type: string;
	deserialise(x: Serialised): any;
}

export class Serialiser {
	private deserialisers: Record<Deserialiseable['type'], Deserialiseable['deserialise']>;

	constructor(...xs: Array<Deserialiseable>) {
		this.deserialisers = xs.reduce((xs, x) => {
			xs[x.type] = x.deserialise;
			return xs;
		}, {} as Serialiser['deserialisers']);
	}


	private stringify(x: Serialised): string {
		return JSON.stringify(x);
	}

	private parse(x: string): Serialised {
		return JSON.parse(x);
	}

	serialise(x: Serialiseable): string {
		return this.stringify(x.serialise());
	}

	deserialise(x: string): unknown {
		const parsed = this.parse(x);
		const deserialiser = this.deserialisers[parsed._type];
		return deserialiser(parsed);
	}
}
