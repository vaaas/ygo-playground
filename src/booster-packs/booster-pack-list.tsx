import { ItemList } from '../components/item-list.tsx';
import { BoosterPack } from '../entities/booster-pack.ts'
import { BoosterPackPreview } from './booster-pack-preview.tsx';

type Props = {
	items: Array<BoosterPack>;
}

export function BoosterPackList(props: Props) {
	return <ItemList>
		{props.items.map(x => <BoosterPackPreview item={x}/>)}
	</ItemList>;
}
