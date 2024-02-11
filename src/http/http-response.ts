import { Buffer } from 'buffer';
import { ServerResponse } from 'http';

export class HTTPResponse {
	private _status: number;
	private _data: string | Buffer;
	private _headers: Record<string, string>;

	constructor(status = 200, data: string | Buffer = '' ) {
		this._status = status;
		this._data = data;
		this._headers = {};
	}

	headers(headers: Record<string, string>): this {
		this._headers = headers;
		return this;
	}

	header(key: string, value: string): this {
		this._headers[key] = value;
		return this;
	}

	body(data: string | Buffer): this {
		this._data = data;
		return this;
	}

	status(status: number): this {
		this._status = status;
		return this;
	}

	serve(res: ServerResponse): void {
		res.writeHead(this._status, this._headers);
		res.end(this._data);
	}
}
