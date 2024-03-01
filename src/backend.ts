import { IncomingMessage, ServerResponse, createServer } from 'node:http';
import { Router, serve } from './http/index.ts';
import { App } from './app.ts';
import { config } from '../config.ts';

function make_router(app: App): Router {
	return new Router()
		.get('/', () => app.controllers.static.index())
		.get('/**', (req) => app.controllers.static.file(req))
		.post('/booster-packs', (req) => app.controllers.booster_packs.create(req))
		.patch('/pooster-packs', (req) => app.controllers.booster_packs.patch(req));
}

function main() {
	const app = new App(config);
	const router = make_router(app);

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
