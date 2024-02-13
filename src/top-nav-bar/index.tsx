import { center, flex, flex_gap_normal, justify_center } from '../utility-css.ts';

export function TopNavBar() {
	return <nav classList={{
		[flex]: true,
		[flex_gap_normal]: true,
		[justify_center]: true,
	}}>
		<a href='#'>Home</a>
		<a href='#'>Manage packs</a>
	</nav>
}
