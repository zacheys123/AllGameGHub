import React, { useEffect, useState } from 'react';
import {
	Card,
	Box,
	CircularProgress,
	TextField,
	Button,
} from '@mui/material';

import jwt_decode from 'jwt-decode';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/features/authSlice';

import '../css/Login.css';
import { useMainContext } from '../context/context_/MainContext';

const Login = () => {
	const initsate = { email: 'example@gmail.com', password: '12345' };
	const location = useLocation();
	const {
		main: { auth, overlay },
		setMainContext,
	} = useMainContext();
	const [formval, setFormval] = useState(initsate);
	const { loading, error } = useSelector((state) => ({
		...state.auth,
	}));
	const [err, setError] = useState('');
	const { email, password } = formval;
	const navigate = useNavigate();
	const [checked, setChecked] = useState(false);
	const [gdata, setGdata] = useState({
		name: '',
		email: '',
		jti: '',
	});
	const redirectpath = location?.state?.from || '/';
	const dispatch = useDispatch();
	const handleSubmit = (ev) => {
		ev.preventDefault();

		if (email && password) {
			dispatch(
				login({
					formval,
					navigate,
					toast,
					setMainContext,
					redirectpath,
				}),
			);
		} else {
			setError('please enter your email and password');
		}
	};
	const oncInputChange = (ev) => {
		let { name, value } = ev.target;
		setFormval({ ...formval, [name]: value });
	};

	useEffect(() => {
		error && toast.error(error);
	}, [error]);

	return (
		<div
			style={{
				margin: 'auto',
				padding: '15px',
				maxWidth: '450px',
				alignContent: 'center',
				marginTop: '120px',
				minHeight: '72.5vh',
			}}
			className="log"
		>
			<h1 className="Auth-form-title">Sign in</h1>
			<div className="Auth-form-container">
				{/*// inputProps ={{ inputMode: 'numeric', pattern: '[0-9]*'}}*/}
				<form
					onSubmit={handleSubmit}
					noValidate
					className="row g-3 p-2 "
				>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>

						<input
							type="email"
							value={email}
							name="email"
							className="form-control"
							aria-describedby="username"
							placeholder="Email"
							onChange={oncInputChange}
						/>
						<small id="emailHelp" className="form-text text-muted">
							Enter Email or Phone Number
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
							type={!checked ? 'password' : 'text'}
							value={password}
							name="password"
							onChange={oncInputChange}
							required
						/>
					</div>
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
							onChange={(ev) => setChecked(!checked)}
						/>
						<label
							className="form-check-label"
							htmlFor="exampleCheck1"
						>
							{!checked ? 'Show Password' : 'Hide Password'}
						</label>
					</div>
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label
							className="form-check-label"
							htmlFor="exampleCheck1"
						>
							Remember Me
						</label>
					</div>
					<Box style={{ textAlign: 'center', marginTop: '1rem' }}>
						<Link to="/register">
							<p>Don't have an account? Sign up</p>
						</Link>
					</Box>
					<button
						type="submit"
						className={!err ? 'btn btn-primary' : 'mt-4'}
					>
						{loading && (
							<CircularProgress
								size="sm"
								tag="span"
								className="me-2"
								role="status"
							/>
						)}
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
