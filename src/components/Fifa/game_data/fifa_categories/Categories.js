import React, { useState, useEffect, useRef } from 'react';
import {
	Stack,
	Box,
	Card,
	FormControl,
	Typography,
	InputLabel,
	TextField,
	Button,
	IconButton,
	MenuItem,
} from '@mui/material';
import {
	handlequick,
	handletourn,
	handleprac,
	handlebestof,
	handlecareer,
} from './modesreducer';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useGameContext } from '../../../../context/context_/GameContext';
import '../../../../css/Category.css';
import LiveTvIcon from '@mui/icons-material/LiveTv';
const Categories = ({ modes, vidref }) => {
	const {
		modes_state: { mode_choice, allteams },
		setMode,
	} = useGameContext();
	const [category, setCateg] = useState('');
	const [active, setActive] = useState(false);

	useEffect(() => {
		modes?.tournref?.current?.classList?.add('remove-active');
		modes?.pracref?.current?.classList?.add('remove-active');
		modes?.bestof?.current?.classList?.add('remove-active');
		modes?.careerref?.current?.classList?.add('remove-active');
		modes?.quickref?.current?.classList?.add('remove-active');
	}, [modes]);
	const isquick = useRef();
	const istourn = useRef();
	const isbest = useRef();
	const isprac = useRef();
	const iscareer = useRef();

	const quick = () => {
		isquick?.current?.classList?.add('active-mode');
		istourn.current.classList.remove('active-mode');
		isbest.current.classList.remove('active-mode');
		isprac.current.classList.remove('active-mode');
		iscareer.current.classList.remove('active-mode');
		vidref.current.style.display = 'none';
		handlequick(modes);
	};
	const tourn = () => {
		istourn.current.classList.add('active-mode');
		isquick.current.classList.remove('active-mode');
		isbest.current.classList.remove('active-mode');
		isprac.current.classList.remove('active-mode');
		iscareer.current.classList.remove('active-mode');
		vidref.current.style.display = 'none';
		handletourn(modes);
	};

	const prac = () => {
		isprac.current.classList.add('active-mode');
		istourn.current.classList.remove('active-mode');
		isquick.current.classList.remove('active-mode');
		isbest.current.classList.remove('active-mode');
		iscareer.current.classList.remove('active-mode');
		vidref.current.style.display = 'none';
		handleprac(modes);
	};
	const bestof = () => {
		isbest.current.classList.add('active-mode');
		istourn.current.classList.remove('active-mode');
		isquick.current.classList.remove('active-mode');
		isprac.current.classList.remove('active-mode');
		iscareer.current.classList.remove('active-mode');
		vidref.current.style.display = 'none';
		handlebestof(modes);
	};
	const career = () => {
		iscareer.current.classList.add('active-mode');
		istourn.current.classList.remove('active-mode');
		isbest.current.classList.remove('active-mode');
		isprac.current.classList.remove('active-mode');
		isquick.current.classList.remove('active-mode');
		vidref.current.style.display = 'none';
		handlecareer(modes);
	};
	return (
		<div className="category">
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				{' '}
				<LiveTvIcon
					onClick={() => {
						vidref.current.style.display = 'block';
					}}
					sx={{
						width: '2rem !important',
						border: 'none !important',
						color: 'red',
					}}
				/>{' '}
				<p
					style={{
						color: 'white',
						fontSize: '.8rem',
						cursor: 'pointer',
					}}
				>
					watch
				</p>
			</div>
			<button
				className="active-mode"
				onClick={quick}
				ref={isquick}
				variant="outlined"
			>
				Quick Match
			</button>
			<button onClick={tourn} ref={istourn} variant="outlined">
				Tournament
			</button>
			<button onClick={bestof} ref={isbest} variant="outlined">
				Best of Series
			</button>
			<button onClick={career} ref={iscareer} variant="outlined">
				Career Mode
			</button>

			<button onClick={prac} ref={isprac} variant="outlined">
				Practice Arena
			</button>
		</div>
	);
};

export default Categories;
