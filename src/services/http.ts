import { IncomingMessage, Server, ServerResponse, createServer } from 'http';
import { Router } from '../router.ts';
import { serve } from '../http/serve.ts';
import { HttpConfig } from '../../config.ts';

export class HTTPService {
	private router: Router;
	private server: Server;
	private port: number;

	constructor(
		config: HttpConfig,
		router: Router,
	) {
		this.port = config.port;
		this.router = router;
		this.server = createServer(this.on_request.bind(this));
	}

	private on_request(req: IncomingMessage, res: ServerResponse) {
		try {
			serve(this.router.route(req), res);
		} catch(e) {
			console.error(e);
			serve(e as Error, res);
		}
	}

	start() {
		this.server.listen(this.port);
	}

	static dependencies() {
		return [
			HttpConfig,
			Router,
		];
	}
}
