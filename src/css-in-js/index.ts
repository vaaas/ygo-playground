import { class_name } from './class-name.ts';

document.head.appendChild(document.createElement('style'));
const stylesheet = document.styleSheets.item(document.styleSheets.length - 1)!;

export function style(xs: Record<string, string>): string {
	const name = '.'  + class_name();
	const contents = Object.entries(xs).reduce((a, x) => a + x.join(':') + ';', '');
	const rule = `${name}{${contents}}`;
	stylesheet.insertRule(rule);
	return name;
}
