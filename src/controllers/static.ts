import { readFileSync } from 'node:fs';
import { IncomingMessage } from 'node:http';
import { HTTPResponse } from '../http/http-response.ts';
import { MIMETYPES } from '../mimetypes.ts';

export class StaticController {
	constructor() {}

	index(): HTTPResponse | Error {
		try {
			return new HTTPResponse(200)
				.body(readFileSync('public/index.html'))
				.header('content-type', MIMETYPES.html);
		} catch(e) {
			return e as Error;
		}
	}

	file(req: IncomingMessage): HTTPResponse | Error {
		try {
			return new HTTPResponse(200)
				.header('content-type', this.determine_mime_type(req.url ?? ''))
				.body(readFileSync('public' + req.url));
		} catch(e) {
			return e as Error;
		}
	}

	private determine_mime_type(x: string): string {
		const ext = x.slice(x.indexOf('.') + 1) as keyof typeof MIMETYPES;
		return MIMETYPES[ext] ?? MIMETYPES.binary;
	}
}
