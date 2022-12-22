export const fifa_action = (show, game, fifa) => {
	show((prev) => {
		if (prev) {
			return !prev;
		}
		return false;
	});
	setTimeout(() => {
		game({ type: 'FIFA', payload: fifa });
	}, 2000);
};
