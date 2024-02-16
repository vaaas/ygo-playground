import { JSXElement } from 'solid-js'
import { Dynamic } from 'solid-js/web';
import { FontSize, size_to_rem } from './types.ts';

type FontWeight =
	'normal'
	| 'bold';

type Props = {
	children: JSXElement | JSXElement[];
	as?: string;
	weight?: FontWeight;
	size?: FontSize;
}

export function Text(props: Props) {
	return <Dynamic
		component={props.as ?? 'div'}
		style={{
			'font-weight': props.weight ?? 'normal',
			'font-size': size_to_rem(props.size ?? 'normal'),
		}}
	>
		{props.children}
	</Dynamic>
}
