import { useEffect } from 'react';
import { useMainContext } from '../context/context_/MainContext';
import { useSelector } from 'react-redux';
import Login from './Login';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Header, Contact } from '../components';
import Feed from '../components/layout/feed/Feed';
import '../css/Global.css';

const Home = () => {
	const {
		main: { currentuser, contact },
		maindispatch,
	} = useMainContext();
	const navigate = useNavigate();
	const { user } = useSelector((state) => ({ ...state.auth }));
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
