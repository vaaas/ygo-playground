import { JSXElement } from 'solid-js';
import { style } from '../css-in-js/index.ts'
import { colors, gaps, pointer, rounded } from '../utility-css.ts'

const buttonStyle = style({
	'font-size': '1rem',
	'color': colors.dark5,
	'padding': `${gaps.extra_narrow} ${gaps.narrow}`,
	'min-width': '5rem',
});

const variants = {
	default: style({
		'background': colors.green1,
		'border': `1px solid ${colors.green5}`,
	}),
};

type Props = {
	children: JSXElement;
}

export function Button(props: Props) {
	return <button
		type='button'
		classList={{
			[rounded]: true,
			[pointer]: true,
			[buttonStyle]: true,
			[variants.default]: true,
		}}
	>
		{props.children}
	</button>
}
