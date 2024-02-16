import { style } from '../../css-in-js/index.ts';

type Props = {
	value: string;
	onValue: (x: string) => void;
	valid?: boolean | undefined;
}

const elemStyle = style({
	'font-size': '1rem',
});

export function FormText(props: Props) {
	function onChange(x: any) {
		props.onValue(x.target.value);
	}

	return <input
		classList={{
			[elemStyle]: true,
		}}
		value={props.value}
		onChange={onChange}
	/>
}
