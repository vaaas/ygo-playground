import { createSignal } from 'solid-js';

export function Signal<T>(initial: T) {
	const NoValue = Symbol();
	const [value, setValue] = createSignal(initial);

	return function Signal(v: T | typeof NoValue = NoValue): T {
		if (v === NoValue)
			return value();
		else
			return setValue(() => v);
	}
}
