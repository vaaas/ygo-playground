import { createSignal } from 'solid-js';

const NoValue = Symbol();

export function Signal<T>(initial: T) {
	const [value, setValue] = createSignal(initial);

	return function Signal(v: T | typeof NoValue = NoValue): T {
		if (v === NoValue)
			return value();
		else
			return setValue(() => v);
	}
}
