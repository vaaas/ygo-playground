import { IncomingMessage } from 'http';
import { MethodNotAllowed, NotFound } from './errors.ts';
import { Handler, Method, Route } from './route.ts';

export class Router {
	routes: Array<Route>;

	constructor() {
		this.routes = [];
	}

	route(req: IncomingMessage) {
		const path = req.url ?? '/';
		console.log(path);
		for (const route of this.routes) {
			console.log(route.regex);
			if (!route.match(path))
				continue;
			else if (!route.methods.has(req.method as any))
				return new MethodNotAllowed();
			else
				return route.methods.get(req.method as any)!(req);
		}
		return new NotFound();
	}

	get(path: string, handler: Handler): this {
		return this.add_route(path, 'GET', handler);
	}

	post(path: string, handler: Handler): this {
		return this.add_route(path, 'POST', handler);
	}

	private add_route(path: string, verb: Method, handler: Handler): this {
		const regex = this.path_to_regex(path);
		let route = this.routes.find(x => x.regex === regex);
		if (!route) {
			route = new Route(regex);
			this.routes.push(route);
		}
		route.methods.set(verb, handler);
		return this;
	}

	private path_to_regex(path: string) {
		const replaced =
			path
				.replaceAll('/', '\\/')
				.replaceAll('*', '([^/]+)');
		return `^${replaced}$`;
	}
}
