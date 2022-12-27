import React, { useState, useEffect, useRef } from 'react';
import { Stack, Box, Button, Typography } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import '../css/Global.css';
import '../css/Header.css';
import logo from '../assets/logo2.jpg';
import { useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMainContext } from '../context/context_/MainContext';
import { setLogout } from '../redux/features/authSlice';
import Theme from './Theme';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
	setFree,
	setAmateur,
	setWorld,
	setPremium,
	setNoPlan,
} from './planRefs';

const Header = (props) => {
	const {
		main: { istheme, contact, auth, userInfo },
		setMainContext,
	} = useMainContext();
	const [profile, setProfile] = useState(false);
	const [moreinfo, setMore] = useState(false);
	const dispatch = useDispatch();
	const { user } = useSelector((state) => ({ ...state.auth }));
	const navigate = useNavigate();
	let source = user?.result?.username.split('')[0].toUpperCase();

	const [active, setActive] = useState(false);
	const [prof, setProf] = useState(false);

	const dashboard = () => {
		setActive(false);
		setProf((prev) => !prev);
	};
	const prof_ = () => {
		setActive(true);
		setProf(false);
	};
	const contacts = (ev) => {
		ev.preventDefault();
		setMainContext({ type: 'CONTACT', payload: contact });
	};
	useEffect(() => {
		props.parentData(user);
	}, []);

	const handleLogout = () => {
		dispatch(setLogout());
		dashboard();
		setProfile((prev) => !prev);
		navigate('./login');
	};

	const location = useLocation();
	const game = useRef();
	const summary = useRef();
	const league = useRef();
	const ranking = useRef();
	const vids = useRef();
	const access = useRef();
	const chat = useRef();
	const share = useRef();
	const allrefs = {
		game,
		summary,
		league,
		ranking,
		vids,
		chat,
		access,
		share,
	};
	useEffect(() => {
		switch (userInfo) {
			case 'Free':
				setFree(allrefs);
			case 'Amateur':
				setAmateur(allrefs);
			case 'World':
				setWorld(allrefs);
			case 'Premium':
				setPremium(allrefs);
		}
	});
	useEffect(() => {
		switch (userInfo) {
			case '':
				setNoPlan(allrefs);
		}
	}, [userInfo]);

	return (
		<>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				className={istheme ? 'header' : 'bg-dark text-light'}
				style={{ padding: '0 1rem 0.3rem 1rem' }}
			>
				<Box>
					{!moreinfo ? (
						<MenuIcon
							sx={{ marginRight: '4rem', cursor: 'pointer' }}
							onClick={() => setMore((prev) => !prev)}
						/>
					) : (
						<CloseIcon
							sx={{ marginRight: '4rem', cursor: 'pointer' }}
							onClick={() => setMore((prev) => !prev)}
						/>
					)}
					{moreinfo && (
						<motion.div
							initial={{ x: '-200px' }}
							animate={{
								x: '-13px',
								y: '1.5rem',
								transition: { duration: 0.8 },
							}}
							exit={{
								x: '0',
								y: '1.5rem',
								transition: { duration: 1 },
							}}
							className="lessnav"
							style={{
								background: !istheme ? 'rgb(28, 4, 4)' : 'white',
								zIndex: 1,
							}}
						>
							<Link
								ref={game}
								className={user?.result?._id ? 'item' : 'disabled'}
								to="/game"
							>
								{' '}
								<Button
									onClick={() => setMore((prev) => !prev)}
									style={{
										color: !istheme ? 'white' : 'darkgreen',
										border: !istheme
											? '1px solid lightgrey'
											: '1px solid violet',
									}}
									variant="outlined"
									size="small"
								>
									Game
								</Button>
							</Link>
							<li
								ref={summary}
								className={user?.result?._id ? 'item' : 'disabled'}
							>
								{' '}
								<Button
									onClick={() => {
										setMore((prev) => !prev);
										window.open('/summary');
									}}
									style={{
										color: !istheme ? 'white' : 'darkgreen',
										border: !istheme
											? '1px solid lightgrey'
											: '1px solid violet',
									}}
									variant="outlined"
									size="small"
								>
									Summary
								</Button>
							</li>
							<Link
								ref={league}
								className={user?.result?._id ? 'item' : 'disabled'}
								to="/standings"
							>
								{' '}
								<Button
									onClick={() => setMore((prev) => !prev)}
									style={{
										color: !istheme ? 'white' : 'darkgreen',
										border: !istheme
											? '1px solid lightgrey'
											: '1px solid violet',
									}}
									variant="outlined"
									size="small"
								>
									League Standings
								</Button>
							</Link>
							<Link
								ref={ranking}
								className={user?.result?._id ? 'item' : 'disabled'}
								to="/ranking"
							>
								{' '}
								<Button
									onClick={() => setMore((prev) => !prev)}
									style={{
										color: !istheme ? 'white' : 'darkgreen',
										border: !istheme
											? '1px solid lightgrey'
											: '1px solid violet',
									}}
									variant="outlined"
									size="small"
								>
									Player Ranking
								</Button>
							</Link>
							<Link
								ref={vids}
								className={user?.result?._id ? 'item' : 'disabled'}
								to="/vids"
							>
								{' '}
								<Button
									onClick={() => setMore((prev) => !prev)}
									style={{
										color: !istheme ? 'white' : 'darkgreen',
										border: !istheme
											? '1px solid lightgrey'
											: '1px solid violet',
									}}
									variant="outlined"
									size="small"
								>
									Watch Videos
								</Button>
							</Link>
							<Link
								ref={access}
								className={user?.result?._id ? 'item' : 'disabled'}
								to="/access-saved"
							>
								{' '}
								<Button
									onClick={() => setMore((prev) => !prev)}
									style={{
										color: !istheme ? 'white' : 'darkgreen',
										border: !istheme
											? '1px solid lightgrey'
											: '1px solid violet',
									}}
									variant="outlined"
									size="small"
								>
									Access Saved Videos
								</Button>
							</Link>
							<Link
								className={user?.result?._id ? 'item' : 'disabled'}
								to="/theme"
							>
								{' '}
								<Button
									onClick={() => setMore((prev) => !prev)}
									style={{
										color: !istheme ? 'white' : 'darkgreen',
										border: !istheme
											? '1px solid lightgrey'
											: '1px solid violet',
									}}
									variant="outlined"
									size="small"
								>
									Change Theme
								</Button>
							</Link>
							<Link
								ref={chat}
								className={user?.result?._id ? 'item' : 'disabled'}
								to="/chat"
							>
								{' '}
								<Button
									onClick={() => setMore((prev) => !prev)}
									style={{
										color: !istheme ? 'white' : 'darkgreen',
										border: !istheme
											? '1px solid lightgrey'
											: '1px solid violet',
									}}
									variant="outlined"
									size="small"
								>
									Create A Chat Room
								</Button>
							</Link>
							<Link
								ref={share}
								className={user?.result?._id ? 'item' : 'disabled'}
								to="/share"
							>
								{' '}
								<Button
									onClick={() => setMore((prev) => !prev)}
									style={{
										color: !istheme ? 'white' : 'darkgreen',
										border: !istheme
											? '1px solid lightgrey'
											: '1px solid violet',
									}}
									variant="outlined"
									size="small"
								>
									Share Videos
								</Button>
							</Link>
						</motion.div>
					)}
				</Box>

				<Box className="logo  d-flex">
					{' '}
					<>
						<Link to="/">
							<img
								src={logo}
								alt=""
								style={{
									height: '35px',
									width: '30px',
									borderRadius: '50%',
								}}
							/>
						</Link>

						<h2
							style={{
								fontFamily: ' Times, serif',
								fontSize: '20px',
								fontWeight: '1200 !important',
							}}
						>
							Game<span style={{ color: 'red' }}>Hub ⚽ </span>{' '}
						</h2>
					</>
				</Box>

				<Box className=" mynav">
					<li className={user?.result?._id ? 'item' : 'disabled'}>
						{' '}
						<Link
							to="/"
							className="butt"
							style={{
								color: !istheme ? 'greenyellow' : 'black',
								listtype: 'none',
								marginLeft: '1.3rem',
								textDecoration: 'none',
							}}
						>
							Home
						</Link>
					</li>

					<li className={user?.result?._id ? 'item' : 'disabled'}>
						{' '}
						<Link
							className="butt"
							to="/"
							style={{
								color: !istheme ? 'greenyellow' : 'black',
								listtype: 'none',
								marginLeft: '1.3rem',
								textDecoration: 'none',
							}}
						>
							About
						</Link>
					</li>

					{location.pathname === '/' && (
						<li className={user?.result?._id ? 'item' : 'disabled'}>
							{' '}
							<Link
								style={{
									color: !istheme ? 'greenyellow' : 'black',
									marginLeft: '1.3rem',
									textDecoration: 'none',
								}}
								className="butt"
								onClick={contacts}
								to=""
							>
								Contact
							</Link>
						</li>
					)}

					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						className="theming"
					>
						<Theme />
					</Box>

					<Box className="auth">
						{!auth && (
							<Box className="userdata">
								{' '}
								<h6 style={{ margin: '.2rem auto -.3rem 5rem' }}>
									{' '}
									<span
										style={{
											color: !istheme ? 'white' : 'black',
										}}
									>
										User Email:&nbsp;
									</span>{' '}
									<span
										style={{
											color: !istheme ? 'yellow' : 'red',
										}}
									>
										{user?.result?.email}
									</span>
								</h6>
							</Box>
						)}
					</Box>
				</Box>
				<div
					className={user?.result?._id ? 'd-block' : 'd-none'}
					style={{ position: 'relative' }}
				>
					<Stack
						onClick={() => setProfile(!profile)}
						className="avatar"
					>
						{source}
					</Stack>
					{profile && (
						<Box
							sx={{
								position: 'absolute',
								background: 'black',
								padding: '1rem',
								borderRadius: '10px',
								right: '1rem',
								width: '15rem',
								zIndex: '999',
							}}
						>
							<Typography
								onClick={dashboard}
								variant="body2"
								className={!active ? 'acti' : 'inacti'}
							>
								DashBoard
							</Typography>
							<Typography
								className={active ? 'acti' : 'inacti'}
								variant="body2"
								sx={{
									color: 'white',
									padding: '1rem',
									textAlign: 'center',
								}}
								onClick={() => {
									setProfile((prev) => !prev);
									prof_();
									navigate(`user/v2/${user?.result?._id}`);
								}}
							>
								View Profile
							</Typography>
							<Typography
								variant="body2"
								sx={{
									color: 'white',
									padding: '1rem',
									textAlign: 'center',
									cursor: 'pointer',
								}}
								onClick={() => window.location.reload()}
							>
								Refresh
							</Typography>{' '}
							<Typography
								variant="body2"
								onClick={() => {
									navigate('/v2/package-plan');
									setProfile((prev) => !prev);
								}}
								style={{
									color: !istheme ? 'yellow' : 'black',
									fontWeight: 'bold',
									padding: '1rem',
									cursor: 'pointer',
									textAlign: 'center',
								}}
							>
								Change Plan
							</Typography>
							<Button
								style={{ marginLeft: '1rem !important' }}
								onClick={handleLogout}
								variant="outlined"
								size="small"
							>
								Log Out
							</Button>
						</Box>
					)}
				</div>
			</Stack>
		</>
	);
};

export default Header;
