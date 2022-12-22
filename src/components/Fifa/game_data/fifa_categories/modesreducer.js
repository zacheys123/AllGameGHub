export const handlequick = (modes) => {
	modes.quickref.current.classList.add('active');
	modes.quickref.current.classList.remove('remove-active');
	modes.tournref.current.classList.add('remove-active');
	modes.tournref.current.classList.remove('active');
	modes.pracref.current.classList.add('remove-active');
	modes.pracref.current.classList.remove('active');
	modes.bestof.current.classList.add('remove-active');
	modes.bestof.current.classList.remove('active');
	modes.careerref.current.classList.add('remove-active');
	modes.careerref.current.classList.remove('active');
};

export const handletourn = (modes) => {
	modes.tournref.current.classList.add('active');
	modes.tournref.current.classList.remove('remove-active');
	modes.quickref.current.classList.add('remove-active');
	modes.quickref.current.classList.remove('active');
	modes.pracref.current.classList.add('remove-active');
	modes.pracref.current.classList.remove('active');
	modes.bestof.current.classList.add('remove-active');
	modes.bestof.current.classList.remove('active');
	modes.careerref.current.classList.add('remove-active');
	modes.careerref.current.classList.remove('active');
};

export const handleprac = (modes) => {
	modes.pracref.current.classList.add('active');
	modes.pracref.current.classList.remove('remove-active');
	modes.tournref.current.classList.add('remove-active');
	modes.tournref.current.classList.remove('active');
	modes.quickref.current.classList.add('remove-active');
	modes.quickref.current.classList.remove('active');
	modes.bestof.current.classList.add('remove-active');
	modes.bestof.current.classList.remove('active');
	modes.careerref.current.classList.add('remove-active');
	modes.careerref.current.classList.remove('active');
};

export const handlebestof = (modes) => {
	modes.bestof.current.classList.add('active');
	modes.bestof.current.classList.remove('remove-active');
	modes.tournref.current.classList.add('remove-active');
	modes.tournref.current.classList.remove('active');
	modes.pracref.current.classList.add('remove-active');
	modes.pracref.current.classList.remove('active');
	modes.quickref.current.classList.add('remove-active');
	modes.quickref.current.classList.remove('active');
	modes.careerref.current.classList.add('remove-active');
	modes.careerref.current.classList.remove('active');
};

export const handlecareer = (modes) => {
	modes.careerref.current.classList.add('active');
	modes.careerref.current.classList.remove('remove-active');
	modes.tournref.current.classList.add('remove-active');
	modes.tournref.current.classList.remove('active');
	modes.pracref.current.classList.add('remove-active');
	modes.pracref.current.classList.remove('active');
	modes.bestof.current.classList.add('remove-active');
	modes.bestof.current.classList.remove('active');
	modes.quickref.current.classList.add('remove-active');
	modes.quickref.current.classList.remove('active');
};
