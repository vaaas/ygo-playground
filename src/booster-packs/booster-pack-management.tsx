import { Button } from '../components/button.tsx';
import { EmptyContents } from '../components/empty-contents.tsx';
import { Page, PageHeader } from '../components/page.tsx';
import { BoosterPack } from '../entities/booster-pack.ts';
import { BoosterPackList } from './booster-pack-list.tsx';

export function BoosterPackManagement() {
	const items: BoosterPack[] = [];
	return <Page>
		<PageHeader>Manage booster packs</PageHeader>

		<header>
			<Button>Add</Button>
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
