import axios from 'axios';

export const player1 = async (dispatch, category, setLoading) => {
	const options = {
		method: 'GET',
		url: `https://api-football-v1.p.rapidapi.com/teams/league/${category}`,
		headers: {
			'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
		},
	};
	try {
		let response = await axios.request(options);
		console.log(response.data.api.teams);
		dispatch({
			type: 'GET_PLAYER1_TEAMS',
			payload: {
				response: response.data.api.teams,
			},
		});
		setLoading(true);
	} catch (error) {
		setLoading(false);
	} finally {
		setLoading(true);
		dispatch({
			type: 'FINALLY',
		});
	}
};

export const player2 = async (dispatch, category1, setLoading) => {
	const options = {
		method: 'GET',
		url: `https://api-football-v1.p.rapidapi.com/teams/league/${category1}`,
		headers: {
			'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
		},
	};
	try {
		let response = await axios.request(options);
		console.log(response.data.api.teams);
		dispatch({
			type: 'GET_PLAYER2_TEAMS',
			payload: {
				response: response.data.api.teams,
			},
		});
		setLoading(true);
	} catch (error) {
		setLoading(false);
	} finally {
		setLoading(true);
		dispatch({
			type: 'FINALLY',
		});
	}
};
