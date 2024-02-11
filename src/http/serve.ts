import { ServerResponse } from 'http';
import { AcceptableResponse } from './route.ts';
import { MIMETYPES } from '../mimetypes.ts';
import { HTTPResponse } from './http-response.ts';

export function serve(x: AcceptableResponse | Promise<AcceptableResponse>, res: ServerResponse): void {
	function serve(x: AcceptableResponse): void {
		if (x instanceof Error) {
			if ('http_response' in x)
				// @ts-ignore
				x.http_response().serve(res);
			else {
				res.writeHead(500, { 'content-type': MIMETYPES.text });
				res.end(x.message);
			}
		} else if (x instanceof HTTPResponse) {
			x.serve(res);
		} else if (typeof x === 'string') {
			res.writeHead(200, { 'content-type': MIMETYPES.text });
			res.end(x);
		} else if (typeof x === 'number') {
			res.writeHead(200, { 'content-type': MIMETYPES.text });
			res.end(x.toString());
		} else if (typeof x === 'object') {
			res.writeHead(200, { 'content-type': MIMETYPES.json });
			res.end(JSON.stringify(x));
		} else {
			res.writeHead(500);
			res.end();
			console.error('unexpected return type: ', typeof x);
		}
	}

	if (x instanceof Promise) {
		x.catch(e => e).then(serve);
	} else {
		serve(x);
	}
}
