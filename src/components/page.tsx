import { JSXElement } from 'solid-js';
import { style } from '@vaaas/css-in-js/index.ts';
import { center, colors } from '../utility-css.ts';
import { gap_to_rem } from './types.ts';
import { Text } from './text.tsx';

export const pageStyle = style({
	'max-width': '50rem',
	'margin': 'auto',
});

export function Page(props: { children: JSXElement | JSXElement[] }) {
	return <div class={pageStyle}>
		{props.children}
	</div>
}

export const headerStyle = style({
	'border-bottom': `1px solid ${colors.dark5}`,
	'margin-bottom': gap_to_rem('wider'),
});

export function PageHeader(props: { children: JSXElement | JSXElement[] }) {
	return <header classList={{
		[headerStyle]: true,
		[center]: true,
	}}>
		<Text size='huge'>{props.children}</Text>
	</header>
}
