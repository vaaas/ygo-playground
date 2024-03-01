import { Text } from '../../components/text.tsx';
import { BoosterPack } from '../../entities/booster-pack.ts';

export function BoosterPackPreview(props: { item: BoosterPack }) {
	return <article>
		<div>
			<img src={props.item.picture}/>
		</div>

		<div>
			<Text as='header' weight='bold'>{props.item.name}</Text>
			<div>{props.item.cards.length} cards</div>
		</div>
	</article>
}
