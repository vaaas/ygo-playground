import { BoosterPack } from '../entities/booster-pack.ts';
import { bold } from '../utility-css.ts';

export function BoosterPackPreview(props: { item: BoosterPack }) {
	return <article>
		<div>
			<img src={props.item.picture}/>
		</div>

		<div>
			<header class={bold}>{props.item.name}</header>
			<div>{props.item.cards.length} cards</div>
		</div>
	</article>
}
