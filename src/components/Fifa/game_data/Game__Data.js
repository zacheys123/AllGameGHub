import React from 'react';
import { Box } from '@mui/material';
import { Fifa, God_of_war, Grand_theft } from './games';
import { useGameContext } from '../../../context/context_/GameContext';
import { motion } from 'framer-motion';
import Modes from '../Fifa_Modes';
const Game__Data = () => {
	const {
		game: { fifa, goa, gta },
		modes_state: { mode_choice },
	} = useGameContext();

	return (
		<>
			<>
				{fifa && (
					<motion.div
						className="fifa"
						initial={{ y: '-300px' }}
						animate={{ y: 0, transition: { duration: 0.6 } }}
						exit={{ y: '-300px', transition: { duration: 0.6 } }}
					>
						<Fifa />
					</motion.div>
				)}
				{goa && (
					<motion.div
						className="God_of_war"
						initial={{ y: '-300px' }}
						animate={{ y: 0, transition: { duration: 0.6 } }}
						exit={{ y: '-300px', transition: { duration: 0.6 } }}
					>
						<God_of_war />
					</motion.div>
				)}
				{gta && (
					<motion.div
						className="Grand_theft"
						initial={{ y: '-300px' }}
						animate={{ y: 0, transition: { duration: 0.6 } }}
						exit={{ y: '-300px', transition: { duration: 0.6 } }}
					>
						<Grand_theft />
					</motion.div>
				)}
			</>
		</>
	);
};

export default Game__Data;
