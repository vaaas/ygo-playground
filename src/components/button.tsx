import { JSXElement } from 'solid-js';
import { style } from '../css-in-js/index.ts'
import { colors, not_allowed, pointer, rounded } from '../utility-css.ts'
import { gap_to_rem } from './types.ts';

const buttonStyle = style({
	'font-size': '1rem',
	'padding': `${gap_to_rem('extra-narrow')} ${gap_to_rem('narrow')}`,
	'min-width': '5rem',
});

const variants = {
	default: style({
		background: colors.green1,
		color: colors.dark5,
		border: `1px solid ${colors.green5}`,
	}),

	disabled: style({
		background: colors.light3,
		color: `${colors.light5}`,
		border: `1px solid ${colors.light5}`,
	}),
};

type Variant = keyof typeof variants;

type Props = {
	children: JSXElement;
	type?: 'button' | 'submit';
	onClick: (x: MouseEvent) => void;
	disabled?: boolean;
	variant?: Variant;
}

export function Button(props: Props) {
	function onClick(x: MouseEvent) {
		if (props.disabled)
			return undefined;
		else
			return props.onClick(x);
	}

	return <button
		disabled={props.disabled ?? false}
		type={props.type ?? 'button'}
		onClick={onClick}
		classList={{
			[rounded]: true,
			[pointer]: !props.disabled,
			[not_allowed]: props.disabled,
			[buttonStyle]: true,
			[variants.default]: !props.disabled && (props.variant ?? 'default') === 'default',
			[variants.disabled]: props.disabled,
		}}
	>
		{props.children}
	</button>
}
