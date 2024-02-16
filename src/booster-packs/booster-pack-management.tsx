import { Button } from '../components/button.tsx';
import { EmptyContents } from '../components/empty-contents.tsx';
import { Page, PageHeader } from '../components/page.tsx';
import { BoosterPack } from '../entities/booster-pack.ts';
import { useRouter } from '../solid-router/index.tsx';
import { AddBoosterPack } from './add-booster-pack.tsx';
import { BoosterPackList } from './booster-pack-list.tsx';

export function BoosterPackManagement() {
	const items: BoosterPack[] = [];
	const router = useRouter();

	function add_booster_pack() {
		router(<AddBoosterPack/>);
	}

	return <Page>
		<PageHeader>Manage booster packs</PageHeader>

		<header>
			<Button onClick={add_booster_pack}>Add</Button>
		</header>

		{
			items.length > 0
				? <BoosterPackList items={items}/>
				: <EmptyContents>
					No booster packs configured yet
				</EmptyContents>
		}

	</Page>
}
