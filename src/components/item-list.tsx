import { JSXElement } from 'solid-js';
import { colors, pad_narrower, rounded } from '../utility-css.ts';
import { style } from '@vaaas/css-in-js/index.ts';
import { lift_single } from '../util/array.ts';
import { Flex } from './flex.tsx';


export function ItemList(props: { children: JSXElement | JSXElement[] }) {
	return <Flex direction='vertical'>
		{lift_single(props.children).map(Item)}
	</Flex>
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
