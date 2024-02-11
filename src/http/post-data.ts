import { IncomingMessage } from 'http';
import { Buffer } from 'buffer';

export function read_post_data(req: IncomingMessage): Promise<Buffer> {
	return new Promise((yes, no) => {
		const bufs = [] as Buffer[];
		req.on('data', (x: Buffer) => bufs.push(x));
		req.on('close', () => yes(Buffer.concat(bufs)));
		req.on('error', (e) => no(e));
	});
}

export function read_post_data_as_json(req: IncomingMessage): Promise<unknown> {
	return read_post_data(req).then(x => JSON.parse(x.toString('utf-8')));
}
