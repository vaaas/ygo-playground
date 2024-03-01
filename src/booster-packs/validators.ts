import {
	Intersection,
	List,
	Natural,
	Partial,
	Structure,
	Text,
	validateOrThrow,
} from '@vaaas/ts-validate';

const Name = Text(6, 255);
const Picture = Text(512);

export const create_request_validator = validateOrThrow(Structure({
	name: Name,
	picture: Picture,
}));

export const patch_request_validator = validateOrThrow(Intersection(
	Structure({
		id: Natural,
	}),

	Partial({
		name: Name,
		picture: Picture,
		cards: List(Natural),
	})),
);
