import { HTTPResponse } from '../http/http-response.ts';

export class BasicAuthorizationError extends Error {
	code: number;
	http_response: () => HTTPResponse;

	constructor() {
		super('Unauthorized');
		this.name = 'BasicAuthorizationError';
		this.code = 401;
		this.http_response = () => new HTTPResponse(401).header('WWW-Authenticate', 'Basic');
	}
}
