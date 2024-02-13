import { render } from 'solid-js/web';
import { RouterProvider, useRouter } from './solid-router/index.tsx';

function App() {
	const route = useRouter();
	return route() ?? 'Hello, world!!!';
}

render(
	() => <RouterProvider>
		<App/>
	</RouterProvider>,

	document.body
);
