import { JSXElement } from 'solid-js';
import { Button } from '../button.tsx';
import { right } from '../../utility-css.ts';
import { style } from '../../css-in-js/index.ts';
import { Flex } from '../flex.tsx';

type Props = {
	onSubmit: () => void;
	disabled?: boolean;
	children: JSXElement | JSXElement[];
}

const elemStyle = style({
	'label > *:first-child': {
		display: 'inline-block',
		width: '33%',
	},
	'label > *:last-child': {
		width: '66%',
	},
});

export function Form(props: Props) {
	function on_submit(e: Event) {
		if (props.disabled === false || props.disabled === undefined)
			props.onSubmit();
		e.stopPropagation();
		e.preventDefault();
		return false;
	}

	return <form onSubmit={on_submit} class={elemStyle}>
		<Flex direction='vertical'>
			{props.children}
		</Flex>

		<footer
			classList={{
				[right]: true,
			}}
		>
			<Button
				type='submit'
				disabled={props.disabled}
				onClick={on_submit}
			>
				Submit
			</Button>
		</footer>
	</form>;
}
