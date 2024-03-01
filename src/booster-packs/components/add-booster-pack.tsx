import { Form } from '../../components/form/form.tsx';
import { Label } from '../../components/form/label.tsx';
import { FormPicture } from '../../components/form/picture.tsx';
import { FormText } from '../../components/form/text.tsx';
import { Page, PageHeader } from '../../components/page.tsx';
import { Signal } from '../../signal/index.ts';

export function AddBoosterPack() {
	function on_submit() {
		return undefined;
	}

	function is_form_valid(): boolean {
		return (
			name().length > 5
			&& typeof picture() === 'string'
		);
	}

	const name = Signal('');
	const picture = Signal(undefined as undefined | string);

	return <Page>
		<PageHeader>Add booster pack</PageHeader>

		<Form onSubmit={on_submit} disabled={!is_form_valid()}>
			<Label>
				<span>Name</span>
				<FormText value={name()} onValue={name} />
			</Label>

			<Label>
				<span>Picture</span>
				<FormPicture value={picture()} onValue={picture}/>
			</Label>
		</Form>
	</Page>
}
