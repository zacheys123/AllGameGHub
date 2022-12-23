export const setFree = (ref) => {
	ref?.game?.current?.classList?.add('item');
	ref?.summary?.current?.classList?.add('item');
	ref?.league?.current?.classList?.add('disabled');
	ref?.ranking?.current?.classList?.add('disabled');
	ref?.vids?.current?.classList?.add('disabled');
	ref?.access?.current?.classList?.add('disabled');
	ref?.chat?.current?.classList?.add('disabled');
	ref?.share?.current?.classList?.add('disabled');
};
export const setAmateur = (ref) => {
	ref?.game?.current?.classList?.add('item');
	ref?.summary?.current?.classList?.add('item');
	ref?.league?.current?.classList?.add('disabled');
	ref?.ranking?.current?.classList?.add('disabled');
	ref?.vids?.current?.classList?.add('disabled');
	ref?.access?.current?.classList?.add('disabled');
	ref?.chat?.current?.classList?.add('disabled');
	ref?.share?.current?.classList?.add('disabled');
};
export const setWorld = (ref) => {
	ref?.game?.current?.classList?.add('item');
	ref?.summary?.current?.classList?.add('item');
	ref?.league?.current?.classList?.add('item');
	ref?.ranking?.current?.classList?.add('item');
	ref?.vids?.current?.classList?.add('disabled');
	ref?.access?.current?.classList?.add('disabled');
	ref?.chat?.current?.classList?.add('disabled');
	ref?.share?.current?.classList?.add('disabled');
};
export const setPremium = (ref) => {
	ref?.game?.current?.classList?.add('item');
	ref?.summary?.current?.classList?.add('item');
	ref?.league?.current?.classList?.add('item');
	ref?.ranking?.current?.classList?.add('item');
	ref?.vids?.current?.classList?.add('item');
	ref?.access?.current?.classList?.add('item');
	ref?.chat?.current?.classList?.add('item');
	ref?.share?.current?.classList?.add('item');
};
export const setNoPlan = (ref) => {
	ref?.game?.current?.classList?.add('disabled');
	ref?.summary?.current?.classList?.add('disabled');
	ref?.league?.current?.classList?.add('disabled');
	ref?.ranking?.current?.classList?.add('disabled');
	ref?.vids?.current?.classList?.add('disabled');
	ref?.access?.current?.classList?.add('disabled');
	ref?.chat?.current?.classList?.add('disabled');
	ref?.share?.current?.classList?.add('disabled');
};
