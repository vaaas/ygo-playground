export function* enumerate<T>(xs: Iterable<T>): Iterable<[number, T]> {
	let i = 0;
	for (const x of xs) {
		yield [i, x];
		i++;
	}
}

export function find<T>(xs: Iterable<T>, f: (x: T) => boolean): T | undefined {
	for (const x of xs) {
		if (f(x))
			return x;
	}
	return undefined;
}
