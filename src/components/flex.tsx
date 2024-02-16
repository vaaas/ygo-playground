import { JSXElement } from 'solid-js';
import { Gap, gap_to_rem } from './types.ts';
import { Dynamic } from 'solid-js/web';

type FlexDirection =
	'horizontal'
	| 'vertical';

type FlexJustify =
	'normal'
	| 'center';

type FlexAlign =
	'normal'
	| 'center';

type Props = {
	as?: string;
	direction?: FlexDirection;
	gap?: Gap;
	justify?: FlexJustify;
	align?: FlexAlign;
	classList?: Record<string, boolean>;
	children: JSXElement | JSXElement[];
}

export function Flex(props: Props) {
	return <Dynamic
		component={props.as ?? 'div'}
		classList={props.classList ?? {}}
		style={{
			display: 'flex',
			'flex-direction':
				(props.direction ?? 'horizontal') == 'horizontal'
					? 'row'
					: 'column',
			gap: gap_to_rem(props.gap ?? 'normal'),
			'justify-content': props.justify ?? 'normal',
			'align-items': props.align ?? 'normal',
		}}
	>
		{props.children}
	</Dynamic>
}
