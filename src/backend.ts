import { App } from './app.ts';
import { DIContainer } from './packages/dependency-injection/index.ts';

function main() {
	const container = new DIContainer();
	container.construct(App);
}

main();
