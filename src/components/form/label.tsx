import { JSXElement } from 'solid-js';
import { block } from '../../utility-css.ts';

export function Label(props: { children: JSXElement[] }) {
	return <label classList={{
		[block]: true,
	}}>
		{props.children}
	</label>
}
