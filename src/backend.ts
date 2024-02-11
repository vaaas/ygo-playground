import { IncomingMessage, ServerResponse, createServer } from 'node:http';
import { Router, serve } from './http/index.ts';
import { config } from '../config.ts';
import { App } from './app.ts';

function main() {
	const app = new App(config);
	const router = new Router();

	router.get('/', () => app.controllers.static.index());
	router.get('/**', (req) => app.controllers.static.file(req));

	function on_request(req: IncomingMessage, res: ServerResponse) {
		try {
			serve(router.route(req), res);
		} catch(e) {
			console.error(e);
			serve(e as Error, res);
		}
	}

	createServer(on_request)
		.listen(config.http.port);
}

main();
