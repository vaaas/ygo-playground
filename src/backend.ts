import { config } from '../config.ts';
import { App } from './app.ts';
import { DIContainer } from './packages/dependency-injection/index.ts';

function main() {
	const container = new DIContainer();
	container.register(config, config);
	container.construct(App);
}

main();
