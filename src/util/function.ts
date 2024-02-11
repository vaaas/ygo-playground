type Unary<A, B> = (a: A) => B;

/** compose functions left-to-right
 *
 * given two functions, **f** and **g**, create a new function **h**
 * such that *h(x) = f(g(x))*
 *
 * likewise for three, four, ... functions
 */
export function compose<A, B, C>(
	a: Unary<A, B>,
	b: Unary<B, C>,
): Unary<A, C>
export function compose<A, B, C, D>(
	a: Unary<A, B>,
	b: Unary<B, C>,
	c: Unary<C, D>,
): Unary<A, D>
export function compose<A, B, C, D, E>(
	a: Unary<A, B>,
	b: Unary<B, C>,
	c: Unary<C, D>,
	d: Unary<D, E>,
): Unary<A, E>
export function compose<A, B, C, D, E, F>(
	a: Unary<A, B>,
	b: Unary<B, C>,
	c: Unary<C, D>,
	d: Unary<D, E>,
	e: Unary<E, F>,
): Unary<A, F>
export function compose<A, B, C, D, E, F, G>(
	a: Unary<A, B>,
	b: Unary<B, C>,
	c: Unary<C, D>,
	d: Unary<D, E>,
	e: Unary<E, F>,
	f: Unary<F, G>,
): Unary<A, G>
export function compose<A, B, C, D, E, F, G, H>(
	a: Unary<A, B>,
	b: Unary<B, C>,
	c: Unary<C, D>,
	d: Unary<D, E>,
	e: Unary<E, F>,
	f: Unary<F, G>,
	g: Unary<G, H>,
): Unary<A, H>
export function compose<A, B, C, D, E, F, G, H, I>(
	a: Unary<A, B>,
	b: Unary<B, C>,
	c: Unary<C, D>,
	d: Unary<D, E>,
	e: Unary<E, F>,
	f: Unary<F, G>,
	g: Unary<G, H>,
	h: Unary<H, I>,
): Unary<A, I>
export function compose<A, B, C, D, E, F, G, H, I, J>(
	a: Unary<A, B>,
	b: Unary<B, C>,
	c: Unary<C, D>,
	d: Unary<D, E>,
	e: Unary<E, F>,
	f: Unary<F, G>,
	g: Unary<G, H>,
	h: Unary<H, I>,
	i: Unary<I, J>,
): Unary<A, J>
export function compose<A, B, C, D, E, F, G, H, I, J, K>(
	a: Unary<A, B>,
	b: Unary<B, C>,
	c: Unary<C, D>,
	d: Unary<D, E>,
	e: Unary<E, F>,
	f: Unary<F, G>,
	g: Unary<G, H>,
	h: Unary<H, I>,
	i: Unary<I, J>,
	j: Unary<J, K>,
): Unary<A, K>
export function compose(...fs: Array<Unary<any, any>>): (x: any) => any {
	return function(x) {
		let a = x
		for (const f of fs) a = f(a)
		return a
	}
}
