import { JSXElement } from 'solid-js';
import { style } from '../css-in-js/index.ts';
import { center, colors, gaps } from '../utility-css.ts';

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
	'font-size': '2rem',
	'border-bottom': `1px solid ${colors.dark5}`,
	'margin-bottom': gaps.wider,
});

export function PageHeader(props: { children: JSXElement | JSXElement[] }) {
	return <header classList={{
		[headerStyle]: true,
		[center]: true,
	}}>
		{props.children}
	</header>
}
