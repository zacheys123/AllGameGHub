import { useEffect } from 'react';
import { useMainContext } from '../context/context_/MainContext';
import { useSelector } from 'react-redux';
import Login from './Login';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Header, Contact } from '../components';
import Feed from '../components/layout/feed/Feed';
import '../css/Global.css';
import API from '../context/api';
const Home = () => {
	const {
		main: { userInfo, contact },

		setMainContext,
	} = useMainContext();
	const { user } = useSelector((state) => ({ ...state.auth }));
	const getUserData = async (ev) => {
		const baseUrl = process.env.REACT_APP_HOST;
		const myprofile = JSON.parse(
			window.localStorage.getItem('profile'),
		);
		let id = myprofile?.result?._id;
		console.log(id);
		try {
			const response = await API.get(`${baseUrl}/user/v2/${id}`);
			setMainContext({
				type: 'FILL_USER',
				payload: response?.data?.package,
			});
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		getUserData();
	}, [user?.result?._id]);

	const navigate = useNavigate();

	return (
		<div style={{ minHeight: '84.7vh' }}>
			{/*// {user?.result?._id && user?.result?._id ? (
			 
			// ) : (
			// 	<Login />
	// )}*/}
			<div id="signinbutton" className="contact">
				<div>{contact && <Contact />}</div>
			</div>
			<Feed />
		</div>
	);
};

export default Home;
