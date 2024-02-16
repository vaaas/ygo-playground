import { JSXElement } from 'solid-js';
import { style } from '../css-in-js/index.ts'
import { colors, pointer, rounded } from '../utility-css.ts'
import { gap_to_rem } from './types.ts';

const buttonStyle = style({
	'font-size': '1rem',
	'color': colors.dark5,
	'padding': `${gap_to_rem('extra-narrow')} ${gap_to_rem('narrow')}`,
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
