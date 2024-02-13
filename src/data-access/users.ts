import { Collection } from '../database/collection.ts';
import { Database } from '../database/database.ts';
import { User, UserEntry } from '../entities/user.ts';

export class UserRepository {
	private collection: Collection<UserEntry>;

	constructor(db: Database) {
		this.collection = db.collection('users');
	}

	authenticate(name: string, password: string): User | undefined {
		const user = this.collection.find(x => x.name === name && x.password === password);
		if (user)
			return User.fromJSON(user);
		else
			return user;
	}
}
