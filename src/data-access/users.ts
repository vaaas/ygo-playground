import { Collection, Database } from 'ygo-playground/database';
import { User, UserEntry } from 'ygo-playground/entities';

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
