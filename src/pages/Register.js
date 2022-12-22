import React, { useEffect, useState, useRef } from 'react';

import { Link, useNavigate, Navigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useMainContext } from '../context/context_/MainContext';
import { register } from '../redux/features/authSlice';
import {
	CircularProgress,
	Button,
	Box,
	TextField,
	Card,
} from '@mui/material';
const initsate = {
	email: '',
	password: '',
	firstname: '',
	lastname: '',
	confirmpasword: '',
};
const Register = ({ authorize }) => {
	const {
		main: { auth, errorm, mymess },
		setMainContext,
	} = useMainContext();
	const [formval, setFormval] = useState(initsate);
	const [checked, setChecked] = useState(false);
	const { loading, error } = useSelector((state) => ({
		...state.auth,
	}));
	const [err, setError] = useState('');
	const { email, password, firstname, lastname, confirmpassword } =
		formval;
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (password !== confirmpassword) {
			return toast.error('Password should match');
		}
		if (
			email &&
			password &&
			firstname &&
			lastname &&
			confirmpassword
		) {
			dispatch(
				register({ formval, navigate, toast, setMainContext }),
			);
		} else {
			setMainContext({
				type: 'EMPTY',
				message: 'All field should be entered',
			});
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
				marginTop: '50px',
				minHeight: '80vh',
			}}
		>
			<Card alignment="center">
				<h1 align="center">Sign Up</h1>
				<Box>
					<form
						onSubmit={handleSubmit}
						noValidate
						className="row g-3 p-2"
					>
						<div className="col-md-12 form-group ">
							{' '}
							<TextField
								label="Firstname"
								type="text"
								value={firstname}
								name="firstname"
								onChange={oncInputChange}
								className="form-control "
								sx={{ margin: 'auto 1rem 1rem auto' }}
								required
							/>
						</div>
						<div className="col-md-12 form-group  ">
							{' '}
							<TextField
								label="Lastname"
								type="text"
								value={lastname}
								name="lastname"
								onChange={oncInputChange}
								className="form-control"
								sx={{ margin: 'auto 1rem 1rem auto' }}
								required
							/>
						</div>
						<div className="col-md-12 form-group  ">
							{' '}
							<TextField
								label="Email"
								type="email"
								value={email}
								name="email"
								onChange={oncInputChange}
								className="form-control "
								sx={{ margin: 'auto 1rem 1rem auto' }}
								required
							/>
						</div>
						<div className="col-md-12 form-group ">
							{' '}
							<TextField
								label="Password"
								type={!checked ? 'password' : 'text'}
								value={password}
								name="password"
								onChange={oncInputChange}
								className="form-control"
								sx={{ margin: 'auto 1rem 1rem auto' }}
								required
							/>
						</div>
						<div className="col-md-12 form-group  ">
							{' '}
							<TextField
								label="Confirm Password"
								type={!checked ? 'password' : 'text'}
								value={confirmpassword}
								name="confirmpassword"
								onChange={oncInputChange}
								className="form-control"
								sx={{ margin: 'auto 1rem 1rem auto' }}
								required
							>
								{' '}
							</TextField>
						</div>
						<div
							className="col-md-12 form-group  mt-2 mx-5"
							style={{ height: '.2rem' }}
						>
							{' '}
							<input
								style={{
									textAlign: 'left',
									width: '2rem',
									height: '1.2rem',
								}}
								type="checkbox"
								name="check"
								onChange={(ev) => setChecked(!checked)}
							/>
							:{!checked ? 'Show Password' : 'Hide Password'}
						</div>
						{errorm ? (
							<p style={{ color: 'red', marginTop: '10px' }}>
								{mymess}
							</p>
						) : (
							''
						)}
						<div className="col-12">
							<Button
								type="submit"
								variant="outlined"
								style={{ width: '100%' }}
								className={err ? '' : 'mt-4'}
							>
								{loading && (
									<CircularProgress
										size="sm"
										tag="span"
										className="me-2"
										role="status"
									/>
								)}
								Register
							</Button>
						</div>
					</form>
				</Box>
				<Box>
					<Link to="/login">
						<p style={{ textAlign: 'center' }}>
							Already have an account? Sign in
						</p>
					</Link>
				</Box>
			</Card>
		</div>
	);
};

export default Register;
