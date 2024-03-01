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

export type ISerialiser = ReturnType<typeof Serialiser>;

export function Serialiser(...xs: Array<Deserialiseable>) {
	const deserialisers = xs.reduce((xs, x) => {
		xs[x.type] = x.deserialise;
		return xs;
	}, {} as Record<Deserialiseable['type'], Deserialiseable['deserialise']>);

	function stringify(x: Serialised): string {
		return JSON.stringify(x);
	}

	function parse(x: string): Serialised {
		return JSON.parse(x);
	}

	function serialise(x: Serialiseable): string {
		return stringify(x.serialise());
	}

	function deserialise(x: string): unknown {
		const parsed = parse(x);
		const deserialiser = deserialisers[parsed._type];
		return deserialiser(parsed);
	}

	return { serialise, deserialise };
}
