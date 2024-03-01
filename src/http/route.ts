import { IncomingMessage } from 'node:http';
import { HTTPResponse } from './http-response.ts';

export type Method =
	'GET'
	| 'POST'
	| 'PATCH';

export type AcceptableResponse =
	HTTPResponse
	| Error
	| number
	| string
	| Record<string, any>
	| Array<any>

export type Handler = (req: IncomingMessage) => AcceptableResponse | Promise<AcceptableResponse>;

export class Route {
	public methods: Map<Method, Handler>;
	public regex: string;

	constructor(regex: string) {
		this.regex = regex;
		this.methods = new Map();
	}

	match(path: string): boolean {
		const matches = path.match(new RegExp(this.regex));
		if (matches === null)
			return false;
		else
			return true;
	}
}
