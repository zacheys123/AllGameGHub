import { Stack, Box, Button } from '@mui/material';
import React, {
	useCallback,
	useState,
	useRef,
	useEffect,
} from 'react';
import Categories from './game_data/fifa_categories/Categories';
import {
	Quick_Match,
	Practice,
	Tournaments,
	Career,
	Best_of,
} from './game_data/fifa_categories';
import { toast } from 'react-toastify';
import { Game_Reg } from '../../context/actions/gameSlice';
import { motion } from 'framer-motion';

import { useGameContext } from '../../context/context_/GameContext';
import Teams from './Teams';
const Modes = (props) => {
	const quickref = useRef();
	const tournref = useRef();
	const pracref = useRef();
	const bestof = useRef();
	const careerref = useRef();

	const player_Mode = {
		quickref,
		tournref,
		pracref,
		bestof,
		careerref,
	};
	useEffect(() => {
		props.parentref(player_Mode);
	}, []);
	return (
		<Stack
			direction="row"
			justifyContent="center"
			sx={{ marginTop: '1rem' }}
		>
			<Box className="modes__right">
				<div ref={quickref}>
					<motion.div
						className="quick"
						initial={{ y: '-300px' }}
						animate={{ y: 0, transition: { duration: 0.6 } }}
						exit={{ y: '-300px', transition: { duration: 0.6 } }}
					>
						<Quick_Match />
					</motion.div>
				</div>
				<div ref={tournref}>
					<motion.div
						className="tournament"
						initial={{ y: '-300px' }}
						animate={{ y: 0, transition: { duration: 0.6 } }}
						exit={{ y: '-300px', transition: { duration: 0.6 } }}
					>
						<Tournaments />
					</motion.div>
				</div>
				<div ref={pracref}>
					<motion.div
						className="practice"
						initial={{ y: '-300px' }}
						animate={{ y: 0, transition: { duration: 0.6 } }}
						exit={{ y: '-300px', transition: { duration: 0.6 } }}
					>
						<Practice />
					</motion.div>
				</div>
				<div ref={bestof}>
					<motion.div
						className="bestof"
						initial={{ y: '-300px' }}
						animate={{ y: 0, transition: { duration: 0.6 } }}
						exit={{ y: '-300px', transition: { duration: 0.6 } }}
					>
						<Best_of />
					</motion.div>
				</div>
				<div ref={careerref}>
					<motion.div
						className="career"
						initial={{ y: '-300px' }}
						animate={{ y: 0, transition: { duration: 0.6 } }}
						exit={{ y: '-300px', transition: { duration: 0.6 } }}
					>
						<Career />
					</motion.div>
				</div>
			</Box>
		</Stack>
	);
};

export default Modes;
