import { JSXElement } from 'solid-js';
import { colors, flex, flex_gap_normal, flex_vertically, pad_narrower, rounded } from '../utility-css.ts';
import { style } from '../css-in-js/index.ts';
import { lift_single } from '../util/array.ts';


export function ItemList(props: { children: JSXElement | JSXElement[] }) {
	return <div classList={{
		[flex]: true,
		[flex_gap_normal]: true,
		[flex_vertically]: true,
	}}>
		{lift_single(props.children).map(Item)}
	</div>
}

const childStyle = style({
	border: `1px solid ${colors.light5}`,
	':hover': {
		'background': colors.light1,
		'border-color': colors.dark5,
	},
});

function Item(child: JSXElement) {
	return <div classList={{
		[childStyle]: true,
		[rounded]: true,
		[pad_narrower]: true,
	}}>
		{child}
	</div>;
}
