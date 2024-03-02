export const class_name = (() => {
	const alnum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let created = 0;

	return function class_name() {
		let digits = '';
		let target = created;
		do {
			digits = digits + alnum[target % alnum.length];
			target = Math.floor(target / alnum.length);
		} while (target > 0);
		created++;
		return digits;
	}
})();
