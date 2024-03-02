import { style } from '@vaaas/css-in-js/index.ts';
import { readFileAsDataUrl } from '../../dom/files.ts';
import { hidden, inline_block, invisible_input, rounded_more } from '../../utility-css.ts';
import { Button } from '../button.tsx';

type Props = {
	value: string | undefined;
	onValue: (x: string) => void;
}

const previewStyle = style({
	'max-width': '15rem',
	'max-height': '15rem',
});

export function FormPicture(props: Props) {
	let fileInput: HTMLInputElement | undefined = undefined;

	function onClick() {
		if (!fileInput)
			return;
		else
			fileInput.click();
	}

	function onChange(x: any) {
		if (!fileInput)
			return;
		else if (!fileInput.files)
			return;
		else if (fileInput.files.length !== 1)
			return;
		else
			readFileAsDataUrl(fileInput.files[0]).then(props.onValue);
	}

	return <span>
		<span classList={{ [hidden]: Boolean(props.value) }}>
			<Button onClick={onClick}>Select an image</Button>
			<input
				ref={fileInput}
				type='file'
				accept='image/*'
				class={invisible_input}
				onChange={onChange}
			/>
		</span>

		<span classList={{
			[hidden]: !props.value,
			[inline_block]: true,
		}}>
			<img
				classList={{
					[previewStyle]: true,
					[rounded_more]: true,
				}}
				src={props.value}
			/>
		</span>
	</span>
}
