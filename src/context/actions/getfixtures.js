import axios from 'axios';

export const getFixtures = async (
	date,
	setLoading,
	setGame,
	cancelToken,
) => {
	const options = {
		url:
			'https://api-football-v1.p.rapidapi.com/v2/fixtures/date/' +
			date,
		headers: {
			'X-RapidAPI-Key': process.env.REACT_APP_FIXTURES,
			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
		},
		cancelToken: cancelToken.token,
	};
	try {
		setLoading(true);
		let resp = await axios.request(options);
		setGame({
			type: 'FIXTURES',
			payload: resp?.data?.api?.fixtures,
		});
		console.log(resp?.data?.api?.fixtures);
		setLoading(false);
	} catch (error) {
		if (axios.isCancel(error)) console.log('cancelled');
		console.log(error);
		setLoading(true);
	}
};
