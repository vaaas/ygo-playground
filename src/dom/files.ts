export function readFileAsDataUrl(x: File): Promise<string> {
	return new Promise((next) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => next(reader.result as string), false);
		reader.readAsDataURL(x);
	});
}
