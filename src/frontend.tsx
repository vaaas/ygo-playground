import { render } from 'solid-js/web';
import { RouterProvider, useRouter } from './solid-router/index.tsx';
import { BoosterPackManagement } from './booster-packs/components/booster-pack-management.tsx';
import { style } from './css-in-js/index.ts';
import { colors, full_height } from './utility-css.ts';
import { TopNavBar } from './top-nav-bar/index.tsx';

const appStyle = style({
	background: colors.light2,
	color: colors.dark2,
	'font-family': 'sans-serif',
	'font-size': '20px',
});

function App() {
	const route = useRouter();
	route(<BoosterPackManagement/>);
	return <div classList={{
		[appStyle]: true,
		[full_height]: true,
	}}>
		<TopNavBar/>
		{route() ?? 'Hello, world!!!'}
	</div>;
}

render(
	() => <RouterProvider>
		<App/>
	</RouterProvider>,

	document.body
);
