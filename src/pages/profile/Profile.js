import React, { useState, useCallback, useRef } from 'react';
import {
	Button,
	Box,
	Stack,
	Typography,
	TextField,
} from '@mui/material';
import { useMainContext } from '../../context/context_/MainContext';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VisibilityOn from '@mui/icons-material/Visibility';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
	Main,
	Left_Bar,
	Image_Data,
	MainStack,
	Profile_Data,
} from './styles';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import API from '../../context/api';
import { motion } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';
import logo from '../../assets/gods.jpg';
import { useGameContext } from '../../context/context_/GameContext';
import {
	update_user,
	delete_user,
} from '../../context/actions/user_actions';

import Modal from './Modal';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = ({ child_userdata }) => {
	const [my_id, setId] = useState(child_userdata);

	const {
		main: {
			istheme,
			loading,
			ismodal,
			success,
			modalcontent,
			updated_user,
			loader,
			disabled,
			authorize,
		},
		setMainContext,
	} = useMainContext();

	const navigate = useNavigate();

	const location = useLocation();

	const [prof, setProf] = useState({
		username: '',
		email: '',
		marital: '',
		occupation: '',
		city: '',
		password: '',
	});

	const [passw, setPassword] = useState(false);
	const [isDataChanged, setChanged] = useState(false);
	const prevData = useRef({});
	const prevUser = useRef({});

	const handleChange = (ev) => {
		ev.preventDefault();
		// const fieldname = ev.target.getAttribute('name');
		// const fieldvalue = ev.target.value;
		// const newformData = { ...prof };
		// newformData[fieldname] = fieldvalue;

		setProf(() => {
			return { ...prof, [ev.target.name]: ev.target.value };
		});
		setChanged(true);
	};
	const [username, setUsername] = useState(
		child_userdata?.result?.username,
	);
	const { id } = useParams();
	// Update function
	const update_acc = useCallback((ev) => {
		const myprofile = { prevData, userId: id };

		ev.preventDefault();
		if (prevData?.current?.username && prevData?.current?.email) {
			if (
				prevData?.current?.password ===
				prevData?.current?.confirmpassword
			) {
				setChanged(false);
				update_user(
					setMainContext,
					loading,
					myprofile,
					id,
					ismodal,
					success,
					navigate,
				);
				setUsername(prevData?.current?.username);

				console.log(prevData);
			} else {
				setMainContext({ type: 'WRONG_PASSWORD' });
			}
		} else {
			setMainContext({ type: 'NO_DATA' });
		}
	}, []);

	// Delete function

	const delete_acc = useCallback(
		(ev) => {
			ev.preventDefault();

			const myprofile = {
				prevData,
				userId: id,
			};

			delete_user(
				setMainContext,
				loading,
				myprofile,
				my_id?.result?._id,
				ismodal,
				success,
				navigate,
				setDisabled,
			);
		},
		[prevData],
	);

	// Get User Data
	const getUserData = async (ev) => {
		const baseUrl = 'http://localhost:5000';
		const myprofile = { prevData, userId: id };
		try {
			const response = await API.get(`${baseUrl}/user/v2/${id}`);

			setProf({
				username: response.data.username,
				email: response.data.email,
				marital: response.data.marital || '',
				occupation: response.data.occupation,
				city: response.data.city,
				package: response.data.package,
				password: response.data.password,
				confirmpassword: response.data.password,
			});
			prevData.current = response?.data;
		} catch (error) {
			console.log(error.message);
		}
	};
	// Loader UseEffect
	const [progress, setProgress] = React.useState(10);

	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress >= 100 ? 0 : prevProgress + 10,
			);
		}, 450);

		return () => {
			clearInterval(timer);
		};
	}, []);

	React.useEffect(() => {
		prevData.current = prof;
		prevUser.current = updated_user;
	}, [prof]);
	const closemodal = () => {
		setMainContext({ type: 'CLOSEMODAL', ismodal });
	};
	React.useEffect(() => {
		setUsername(child_userdata?.result?.username);
	}, [child_userdata?.result?._id, updated_user]);
	const [disable, setDisabled] = useState(false);
	React.useEffect(() => {
		getUserData();
		setDisabled(false);
	}, [child_userdata?.result?._id, child_userdata?.result?.username]);

	return (
		<Stack sx={{ background: 'white', minHeight: '80vh' }}>
			<MainStack>
				<Left_Bar>
					<Image_Data>
						<h4>Change Profile Picture</h4>
						<Box
							sx={{
								height: '20em',
								width: '100%',
								background: 'white',
							}}
						>
							<img src={logo} />
							<input
								type="file"
								placeholder="change profile picture"
							/>
						</Box>
						<Box
							sx={{
								color: 'lightgrey',
								padding: '.4rem',
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<>
								<h5>
									Username:
									<span style={{ color: 'lightgrey', opacity: '.6' }}>
										{username}
									</span>
								</h5>
								<p>
									{' '}
									Email Address:
									<span style={{ color: 'lightgrey', opacity: '.6' }}>
										{' '}
										{child_userdata?.result?.email}
									</span>
								</p>
								<p>
									N/B:AUser can Only update their data/information
									only.
								</p>
								<p>
									N/B:An Admin on the Other hand can only delete or
									terminate a user anytime but they cannot edit or
									change any of the user's data.
								</p>
								<Stack
									direction="row"
									sx={{
										padding: '.4rem',
										background: 'maroon',
										width: '50%',
									}}
								>
									{' '}
									<ArrowBackIcon />
									Go Back
								</Stack>
							</>
							<Button variant="outlined" sx={{ width: '37%' }}>
								Sign out
							</Button>
						</Box>
					</Image_Data>
				</Left_Bar>
				<Main istheme={istheme}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-evenly',
						}}
					>
						<Typography
							variant="h5"
							sx={{
								color: 'red',
								marginLeft: '1rem',
								marginTop: '.5rem !important',
							}}
						>
							Update Info
						</Typography>
						<Button
							disabled={disable}
							variant="outlined"
							color="secondary"
							sx={{
								color: istheme ? 'green' : 'white',
								fontWeight: 'bold',
								marginTop: '.8rem',
								border: '1px solid green',
							}}
							onClick={() => setDisabled((prev) => !prev)}
						>
							Edit Profile
							<EditIcon />
						</Button>
					</Box>

					{ismodal && (
						<Modal
							modalcontent={modalcontent}
							closemodal={closemodal}
							success={success}
						/>
					)}
					<Box
						className="container-fluid"
						sx={{
							marginTop: '.9rem',
							borderLeft: '1px solid lightgrey',
							height: '73vh',
							paddingTop: '.2rem',
							background: istheme ? 'white' : 'black',
						}}
					>
						<Profile_Data disabled={disable} className="form-group">
							<TextField
								disabled={!disable}
								InputLabelProps={{
									shrink: true,
									style: {
										color: istheme ? 'grey' : 'grey',
										marginLeft: '.5rem',
										pointerEvents: 'none',
									},
								}}
								name="username"
								labelid="demo-simple-select-standard-label"
								id="demo-simple-select-standard"
								variant="standard"
								label="Username"
								sx={{
									color: 'white',
									width: '100%',
									borderLeft: !istheme ? '2px solid grey' : 'none',
									borderBottom: '1px solid lightgrey',
								}}
								inputProps={{
									style: {
										color: !istheme
											? disabled
												? 'black'
												: 'white'
											: 'black',
										marginLeft: '.5rem',
									},
								}}
								value={prof.username || ''}
								onChange={handleChange}
								type="text"
							/>
						</Profile_Data>
						<Profile_Data disabled={disable}>
							<TextField
								disabled={!disable}
								InputLabelProps={{
									shrink: true,
									style: {
										color: istheme ? 'grey' : 'grey',
										marginLeft: '.5rem',
									},
								}}
								name="email"
								labelid="demo-simple-select-standard-label"
								id="demo-simple-select-standard"
								variant="standard"
								label="Email Address"
								sx={{
									color: 'white',
									width: '100%',
									borderLeft: !istheme ? '2px solid grey' : 'none',
									borderBottom: '1px solid lightgrey',
								}}
								inputProps={{
									style: {
										marginLeft: '.5rem',
										color: !istheme ? 'white' : 'black',
									},
								}}
								value={prof.email || ''}
								onChange={handleChange}
							/>
						</Profile_Data>
						<Profile_Data disabled={disable}>
							<TextField
								disabled={!disable}
								InputLabelProps={{
									shrink: true,
									style: {
										color: istheme ? 'grey' : 'grey',
										marginLeft: '.5rem',
									},
								}}
								name="marital"
								labelid="demo-simple-select-standard-label"
								id="demo-simple-select-standard"
								variant="standard"
								label="Marital Status"
								sx={{
									color: 'white',
									width: '100%',
									borderLeft: !istheme ? '2px solid grey' : 'none',
									borderBottom: '1px solid lightgrey',
								}}
								inputProps={{
									style: {
										marginLeft: '.5rem',
										color: !istheme ? 'white' : 'black',
									},
								}}
								value={prof.marital || ''}
								onChange={handleChange}
							/>
						</Profile_Data>
						<Profile_Data disabled={disable}>
							<TextField
								disabled={!disable}
								InputLabelProps={{
									shrink: true,
									style: {
										color: istheme ? 'grey' : 'grey',
										marginLeft: '.5rem',
									},
								}}
								name="occupation"
								labelid="demo-simple-select-standard-label"
								id="demo-simple-select-standard"
								variant="standard"
								label="Occupation"
								sx={{
									color: 'white',
									width: '100%',
									borderLeft: !istheme ? '2px solid grey' : 'none',
									borderBottom: '1px solid lightgrey',
								}}
								inputProps={{
									style: {
										marginLeft: '.5rem',
										color: !istheme ? 'white' : 'black',
									},
								}}
								value={prof.occupation || ''}
								onChange={handleChange}
							/>
						</Profile_Data>

						<Profile_Data disabled={disable}>
							<TextField
								disabled={!disable}
								InputLabelProps={{
									shrink: true,
									style: {
										color: istheme ? 'grey' : 'grey',
										marginLeft: '.5rem',
									},
								}}
								name="city"
								labelid="demo-simple-select-standard-label"
								id="demo-simple-select-standard"
								variant="standard"
								label="City"
								sx={{
									color: 'white',
									width: '100%',
									borderLeft: !istheme ? '2px solid grey' : 'none',
									borderBottom: '1px solid lightgrey',
								}}
								inputProps={{
									style: {
										marginLeft: '.5rem',
										color: !istheme ? 'white' : 'black',
									},
								}}
								value={prof.city || ''}
								onChange={handleChange}
							/>
						</Profile_Data>
						<Profile_Data disabled={disable}>
							<Box style={{ display: 'flex' }}>
								<TextField
									disabled={!disable}
									InputLabelProps={{
										shrink: true,
										style: {
											color: istheme ? 'grey' : 'grey',
											marginLeft: '.5rem',
										},
									}}
									name="password"
									labelid="demo-simple-select-standard-label"
									id="demo-simple-select-standard"
									variant="standard"
									label="New Password"
									type={!passw ? 'password' : 'text'}
									sx={{
										color: 'white',
										width: '100%',
										borderLeft: !istheme ? '2px solid grey' : 'none',
										borderBottom: '1px solid lightgrey',
									}}
									inputProps={{
										style: {
											marginLeft: '.5rem',
											color: !istheme
												? disabled
													? 'black'
													: 'white'
												: 'black',
										},
									}}
									value={prof.password || ''}
									onChange={handleChange}
								/>
								{!passw ? (
									<VisibilityOff
										sx={{
											cursor: 'pointer',
											color: !istheme ? 'white' : 'black',
										}}
										onClick={() => {
											setPassword((prof) => !prof);
										}}
									/>
								) : (
									<VisibilityOn
										sx={{
											cursor: 'pointer',
											color: !istheme ? 'white' : 'black',
										}}
										onClick={() => {
											setPassword((prof) => !prof);
										}}
									/>
								)}
							</Box>
						</Profile_Data>
						<Profile_Data disabled={disable}>
							<TextField
								disabled={!disable}
								InputLabelProps={{
									shrink: true,
									style: {
										color: istheme ? 'grey' : 'grey',
										marginLeft: '.5rem',
									},
								}}
								type={!passw ? 'password' : 'text'}
								name="confirmpassword"
								labelid="demo-simple-select-standard-label"
								id="demo-simple-select-standard"
								variant="standard"
								label="Confirm New Password"
								sx={{
									color: 'white',
									width: '100%',
									borderLeft: !istheme ? '2px solid grey' : 'none',
									borderBottom: '1px solid lightgrey',
								}}
								inputProps={{
									style: {
										marginLeft: '.5rem',
										color: !istheme ? 'white' : 'black',
									},
								}}
								onChange={handleChange}
							/>
						</Profile_Data>
						<Box style={{ color: 'red', textAlign: 'center' }}></Box>
						<Box sx={{ marginTop: '2rem' }}>
							<Button
								disabled={loading}
								onClick={update_acc}
								variant="outlined"
								sx={{
									background: 'lightblue',
									marginRight: '1rem',
									color: 'green',
								}}
							>
								{loading && (
									<CircularProgressWithLabel
										value={progress}
										size="27px"
										sx={{ marginRight: '.6rem' }}
									/>
								)}
								Update data
							</Button>
							<Button
								onClick={delete_acc}
								variant="contained"
								sx={{ background: 'red' }}
							>
								{loader ? (
									<CircularProgress
										size="20px"
										sx={{ color: 'white' }}
									/>
								) : (
									'Delete Account'
								)}
							</Button>
						</Box>
					</Box>
				</Main>
			</MainStack>
		</Stack>
	);
};

export default Profile;

function CircularProgressWithLabel(props) {
	return (
		<Box sx={{ position: 'relative', display: 'inline-flex' }}>
			<CircularProgress variant="determinate" {...props} />
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography
					variant="caption"
					component="div"
					color="text.secondary"
				>
					{`${Math.round(props.value)}%`}
				</Typography>
			</Box>
		</Box>
	);
}

CircularProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate variant.
	 * Value between 0 and 100.
	 * @default 0
	 */
	value: PropTypes.number.isRequired,
};
