import { HTTPService } from './services/http.ts';

export class App {
	constructor(http: HTTPService) {
		http.start();
	}

	static dependencies() {
		return [
			HTTPService,
		] as const;
	}
}
