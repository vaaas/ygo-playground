export function* enumerate<T>(xs: Iterable<T>): Iterable<[number, T]> {
	let i = 0;
	for (const x of xs) {
		yield [i, x];
		i++;
	}
}
