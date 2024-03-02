import { JSXElement, createContext, useContext } from 'solid-js';
import { Signal } from '@vaaas/solid-signal';

type Router = ReturnType<typeof Signal<undefined | JSXElement>>;

const RouterContext = createContext<Router>();

export function RouterProvider(props: { children: JSXElement}) {
	const route = Signal<undefined | JSXElement>(undefined);

	return <RouterContext.Provider value={route}>
		{props.children}
	</RouterContext.Provider>;
}

export const useRouter = (): Router => useContext(RouterContext)!;
