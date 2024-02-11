import { IncomingMessage, ServerResponse, createServer } from 'http';
import { Router, serve } from './http/index.ts';
import { config } from '../config.ts';
import { App } from './app.ts';
import { compose } from './util/function.ts';

function main() {
	const app = new App(config);
	const router = new Router();

	router.get('/', compose(
		(req) => app.auth.demand_basic_authentication(req),
		() => 'hello, world!'
	));

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
