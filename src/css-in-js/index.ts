import { class_name } from './class-name.ts';
import { Rule } from './rule.ts';
import { NestedRules, Rules } from './types.ts';

document.head.appendChild(document.createElement('style'));
const stylesheet = document.styleSheets.item(document.styleSheets.length - 1)!;

function* rules(xs: NestedRules, prefix = ''): Iterable<Rule> {
	const ys: Rules = {};
	for (const [k, v] of Object.entries(xs)) {
		if (typeof v === 'string')
			/** @ts-ignore */
			ys[k] = v;
		else
			yield* rules(v, prefix + (k.startsWith(':') ? k : ' ' + k));
	}
	yield new Rule(prefix, ys);
}

export function style(xs: NestedRules): string {
	const name = class_name();
	Array.from(rules(xs))
		.map(x => x.mapSelector(x => '.' + name + x))
		.forEach(x => stylesheet.insertRule(x.toString()));
	return name;
}
