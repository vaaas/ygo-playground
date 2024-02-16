import { JSXElement } from 'solid-js';
import { center, colors, no_select, pad_narrower, rounded } from '../utility-css.ts';
import { style } from '../css-in-js/index.ts';
import { Flex } from './flex.tsx';

const elemStyle = style({
	'min-height': '10rem',
	background: colors.light3,
	border: `1px solid ${colors.light4}`,
});

export function EmptyContents(props: { children: JSXElement | JSXElement[] }) {
	return <Flex
		justify='center'
		align='center'
		classList={{
			[rounded]: true,
			[pad_narrower]: true,
			[center]: true,
			[elemStyle]: true,
			[no_select]: true,
		}}
	>
		{props.children}
	</Flex>
}
