import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { setUser } from './redux/features/authSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './App.css';

import { useMainContext } from './context/context_/MainContext';
import {
	Login,
	Standings,
	Register,
	Game,
	PackagePlan,
	AllGames,
	NoPage,
	Home,
	Admin,
} from './pages';

import PrivateRoutes from './components/PrivateRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './pages/profile/Profile';
import Priv_Admin from './components/Priv_Admin';
import { LineAxisOutlined } from '@mui/icons-material';
import API from './context/api';
function App() {
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile'));
	useEffect(() => {
		dispatch(setUser(user));
	}, [user, dispatch]);

	const [loader, setLoader] = useState(true);
	const {
		main: { overlay, userInfo },
		setMainContext,
	} = useMainContext();
	const [child_userdata, setChildUser] = useState('');
	const spinner = document.getElementById('spinner');

	const myLoader = () => {
		if (spinner) {
			setTimeout(() => {
				spinner.style.display = 'none';
				setLoader(false);
			}, 200);
		}
	};
	useEffect(() => {
		myLoader();
		setMainContext({ type: 'OVERLAY1' });
	}, []);

	//
	const getUserData = async (ev) => {
		const baseUrl = 'http://localhost:5000';
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
		console.log(userInfo);

		getUserData();
	}, []);
	const getChildUser = (childData) => {
		return setChildUser(childData);
	};
	return (
		<>
			{loader && (
				<BrowserRouter>
					<div className="App" style={{ position: 'relative' }}>
						<Header parentData={getChildUser} />
						<hr style={{ width: '95%', margin: 'auto' }} />
						<ToastContainer />
						<Routes>
							<Route exact path="/summary" element={<AllGames />} />
							<Route
								exact
								path="/standings"
								element={
									<PrivateRoutes>
										<Standings />
									</PrivateRoutes>
								}
							/>
							<Route
								exact
								path="/game"
								element={<Game child_userdata={child_userdata} />}
							/>
							<Route
								exact
								path="/user/v2/:id"
								element={<Profile child_userdata={child_userdata} />}
							/>
							<Route
								path="*"
								element={
									<PrivateRoutes>
										{' '}
										<NoPage />
									</PrivateRoutes>
								}
							/>
							<Route
								exact
								path="/admin"
								element={
									<Priv_Admin>
										<Admin />
									</Priv_Admin>
								}
							/>
							<Route
								exact
								path="/"
								element={
									<PrivateRoutes>
										<Home />
									</PrivateRoutes>
								}
							/>
							<Route exact path="/login" element={<Login />} />
							<Route
								exact
								path="/register"
								element={<Register />}
							/>{' '}
							<Route
								exact
								path="/package-plan"
								element={
									<PackagePlan child_userdata={child_userdata} />
								}
							/>
						</Routes>

						<Footer />
					</div>
				</BrowserRouter>
			)}
		</>
	);
}

export default App;
