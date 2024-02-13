import { BoosterPack } from '../entities/booster-pack.ts';

export function BoosterPackPreview(props: { item: BoosterPack }) {
	return <article>
		<div>
			<img src={props.item.picture}/>
		</div>

		<div>
			<header>{props.item.name}</header>
			<div>{props.item.cards.length} cards</div>
		</div>
	</article>
}
