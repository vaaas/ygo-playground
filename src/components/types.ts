export type Gap =
	'extra-narrow'
	| 'narrower'
	| 'narrow'
	| 'normal'
	| 'wide'
	| 'wider'
	| 'extra-wide';

export const gap_to_rem = (x: Gap): string => {
	switch (x) {
		case 'extra-narrow': return '0.25rem';
		case 'narrower': return '0.5rem';
		case 'narrow': return '0.75rem';
		case 'normal': return '1rem';
		case 'wide': return '1.25rem';
		case 'wider': return '1.5rem';
		case 'extra-wide': return '2rem';
		default: return '1rem';
	}
};

export type FontSize =
	'normal'
	| 'huge';

export const size_to_rem = (x: FontSize): string => {
	switch (x) {
		case 'normal': return '1rem';
		case 'huge': return '2rem';
	}
};
