import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
	Stack,
	Box,
	Card,
	FormControl,
	Select,
	InputLabel,
	TextField,
	Button,
	MenuItem,
} from '@mui/material';

import './css/Fifa.css';
import fifa23 from '../../../../assets/fifa2023.avif';
import fifa22 from '../../../../assets/catwoman.jpg';
import fifa21 from '../../../../assets/dark.jpg';
import fifa20 from '../../../../assets/gta5.jpg';
import Categories from '../fifa_categories/Categories';
import Modes from '../../Fifa_Modes';
const Fifa = () => {
	const [team, setTeam] = useState('');
	const [modes, setModes] = useState(null);
	const [mode_vid, setModevid] = useState(true);
	const parentref = (mode_refs) => {
		setModes(mode_refs);
	};
	// ATBBXUZg4AgxuJFtDqzrrDj33tfDD167C7F4
	const vidref = useRef();
	useEffect(() => {
		vidref.current.style.display = 'block';
	}, []);

	return (
		<>
			<Stack
				height="100%"
				style={{
					background: 'transparent',
					display: 'flex',
				}}
			>
				<Box sx={{ flex: 1 }}>
					{' '}
					<Categories modes={modes} vidref={vidref} />
				</Box>
				<Box
					sx={{
						flex: 9,
						background: 'black',
						position: 'relative',
						minHeight: '85vh',
					}}
				>
					<Box
						ref={vidref}
						sx={{
							height: '100%',
							marginLeft: '4.4rem',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							position: 'absolute',
						}}
					>
						{' '}
						<video
							src=""
							autoPlay={true}
							controls
							style={{
								margin: 'auto 0  ',
								height: '70%',
								width: '100%',
							}}
						></video>
						<h4 align="center" style={{ color: 'lightgrey' }}>
							Welcome to Gamehub Modes Selection Page
						</h4>
					</Box>

					<Modes parentref={parentref} />
				</Box>
			</Stack>
		</>
	);
};

export default Fifa;
