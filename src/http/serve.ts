import { ServerResponse } from 'http';
import { AcceptableResponse } from './route.ts';
import { MIMETYPES } from '../mimetypes.ts';

export function serve(x: AcceptableResponse | Promise<AcceptableResponse>, res: ServerResponse): void {
	function serve(x: AcceptableResponse): void {
		if (x instanceof Error) {
			const code = ('code' in x ? x.code : 500) as number;
			res.writeHead(code, { 'content-type': MIMETYPES.text });
			res.end(x.message);
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
