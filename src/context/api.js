import axios from 'axios';

const API = axios.create({
	baseUrl: process.env.REACT_APP_HOST,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});
export default API;
