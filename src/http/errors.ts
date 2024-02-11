export class NotFound extends Error {
	public code: number;

	constructor() {
		super('Not found');
		this.code = 404;
	}
}

export class MethodNotAllowed extends Error {
	public code: number;

	constructor() {
		super('Method not allowed');
		this.code = 405;
	}
}
