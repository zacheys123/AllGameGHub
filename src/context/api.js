import axios from 'axios';

const API = axios.create({
	baseUrl: 'http://localhost:5000',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});
export default API;
