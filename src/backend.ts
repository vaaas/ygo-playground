import { IncomingMessage, ServerResponse, createServer } from 'http';
import { Router, serve } from './http/index.ts';
import { config } from '../config.ts';

function main() {
	const router = new Router();
	router.get('/', () => 'hello, world!');

	function on_request(req: IncomingMessage, res: ServerResponse) {
		serve(router.route(req), res);
	}

	createServer(on_request)
		.listen(config.http.port);
}

main();
