import { Rules } from './types.ts';

export class Rule {
	private selector: string;
	private rules: Rules;

	constructor(selector: string, rules: Rules) {
		this.selector = selector;
		this.rules = rules;
	}

	toString(): string {
		return `${this.selector}{${this.stringify_rules()}}`;
	}

	mapSelector(f: (x: string) => string): this {
		this.selector = f(this.selector);
		return this;
	}

	private stringify_rules(): string {
		return Object.entries(this.rules)
			.reduce((a, x) => a + x.join(':') + ';', '');
	}
}
