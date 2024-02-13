import { Button } from '../components/button.tsx';
import { Page, PageHeader } from '../components/page.tsx';
import { BoosterPack } from '../entities/booster-pack.ts';
import { BoosterPackList } from './booster-pack-list.tsx';

export function BoosterPackManagement() {
	const items: BoosterPack[] = [
		new BoosterPack(1, 'First booster pack', 'http://google.com', [1,2,3]),
		new BoosterPack(1, 'Second booster pack', 'http://google.com', [1,2,3]),
	];
	return <Page>
		<PageHeader>Manage booster packs</PageHeader>

		<header>
			<Button>Add</Button>
		</header>

		<BoosterPackList items={items}/>
	</Page>
}
