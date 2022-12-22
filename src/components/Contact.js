import React, { useState, useRef } from 'react';

import { Paper, TextField, Button, IconButton } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

import { motion } from 'framer-motion';

import { useMainContext } from '../context/context_/MainContext';
import { useSelector } from 'react-redux';
import '../css/Contact.css';
function Contact() {
	const { user } = useSelector((state) => ({ ...state.auth }));
	const [userdata, setUserdata] = useState({
		username: user?.result?.username,
		email: user?.result?.email,
		subject: '',
		message: '',
		company: '',
	});
	const form = useRef();
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [button, setbutton] = useState(false);
	const {
		main: { istheme, contact, currentuser },
		setMainContext,
	} = useMainContext();
	const handlechange = () => {
		if (userdata.subject.length > 0 && userdata.message.length > 0) {
			setbutton(true);
		} else {
			setbutton(false);
		}
	};

	const handleinput = (ev) => {
		setUserdata({ ...userdata, [ev.target.name]: ev.target.value });
	};
	return (
		<>
			<motion.div
				initial={{ transform: 'scale(0)', opacity: 0 }}
				animate={{
					transform: 'scale(1)',
					opacity: 1,
					transition: { duration: 0.9 },
				}}
				style={{
					height: '100vh',
					display: 'flex',
					position: 'absolute',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100vw',
				}}
			>
				<Paper
					style={{
						height: '34rem',
						width: '22rem',
						padding: '10px',
						marginTop: '-10rem',
					}}
				>
					{success && (
						<motion.div
							initial={{ y: '-200px' }}
							animate={{
								y: -16,
								opacity: 1,
								transition: { duration: 1 },
							}}
							exit={{
								y: '-200px',
								opacity: 0.4,
								transition: { duration: 3 },
							}}
							style={{ width: '85%' }}
							className="alert alert-info mt-3 mx-4 text-center position-absolute "
						>
							Email sent successfully
						</motion.div>
					)}
					{error && (
						<motion.div className="alert alert-success">
							Error sending Email
						</motion.div>
					)}
					<form noValidate autoComplete="off" ref={form}>
						<h4 align="center">Contact Us!</h4>{' '}
						<div>
							<TextField
								style={{ margin: '1rem', width: '85%' }}
								className="input"
								name="username"
								variant="standard"
								onChange={handleinput}
								value={userdata.username}
								required
							/>
						</div>
						<div>
							<TextField
								style={{ margin: '1rem', width: '85%' }}
								className="input"
								name="email"
								variant="standard"
								value={userdata.email}
								required
								onChange={handleinput}
							/>{' '}
						</div>
						<div>
							<TextField
								style={{ margin: '1rem', width: '85%' }}
								className="input"
								name="subject"
								variant="standard"
								value={userdata.subject}
								autoFocus
								onChange={handleinput}
								label="Subject"
								required
								onKeyUp={handlechange}
							/>{' '}
							<div>
								<TextField
									style={{ margin: '1rem', width: '85%' }}
									className="input"
									name="company"
									variant="standard"
									value={userdata.company}
									onChange={handleinput}
									label="Company name"
									required
									onKeyUp={handlechange}
								/>{' '}
							</div>
						</div>
						<div>
							<textarea
								value={userdata.msg}
								style={{
									marginTop: '2rem',
									marginRight: '1rem',
									marginLeft: '1rem',
									width: '85%',
									resize: 'none',
								}}
								name="message"
								required
								onChange={handleinput}
								placeholder="Message..."
							/>
						</div>
						<div className="w-100 d-flex align-items-center justify-content-center">
							<Button
								type="submit"
								variant="contained"
								className="input"
								style={{ marginTop: '2rem' }}
							>
								Send &nbsp; <SendIcon />
							</Button>
						</div>
					</form>
				</Paper>
			</motion.div>
		</>
	);
}

export default Contact;
