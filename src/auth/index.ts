import { IncomingMessage } from 'node:http';
import { UserRepository } from 'ygo-playground/data-access';
import { User } from 'ygo-playground/entities';
import { BasicAuthorizationError } from './errors.ts';

export type Authenticated<T extends IncomingMessage> = T & { user: User }

export class AuthService {
	users: UserRepository;

	constructor(users: UserRepository) {
		this.users = users;
	}

	demand_basic_authentication<T extends IncomingMessage>(req: T): Authenticated<T> {
		const authorization = req.headers['Authorization'];
		if (typeof authorization !== 'string')
			throw new BasicAuthorizationError();
		if (!authorization.startsWith('Basic '))
			throw new BasicAuthorizationError();
		const b64 = authorization.slice('Basic '.length);
		const decoded = atob(b64);
		const split = decoded.split(':');
		if (split.length !== 2)
			throw new BasicAuthorizationError();
		const [name, password] = split;
		const user = this.users.authenticate(name, password);
		if (!user)
			throw new BasicAuthorizationError();
		//@ts-ignore
		req.user = user;
		//@ts-ignore
		return req;
	}
}
