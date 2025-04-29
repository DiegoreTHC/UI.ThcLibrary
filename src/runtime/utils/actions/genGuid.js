export const genGuid = (str: string = "") => {
	if (str.length) {
		return `thc-xxx-${str}`.replace(/[xy]/g, (c) => {
			const r = (Math.random() * 3) | 0,
				v = c === "x" ? r : (r & 0x3) | 0x8;
			return v.toString(3);
		});
	}

	return "thc-xxxx".replace(/[xy]/g, (c) => {
		const r = (Math.random() * 7) | 0,
			v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(7);
	});
};