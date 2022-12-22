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
	const {
		modes_state: { game_info, p_data },
		setMode,
	} = useGameContext();

	const [error, setError] = useState('');
	const [amount, setAmount] = useState(30);
	const [p1_goal, setP1Goal] = useState(0);
	const [p2_goal, setP2Goal] = useState(0);
	const onSubmit = useCallback(
		(ev) => {
			ev.preventDefault();
			let newdata = { ...p_data, amount, p1_goal, p2_goal };
			if (p_data) {
				Game_Reg(newdata);
			}

			setError('please enter your email and password');
		},
		[p_data],
	);
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

			{game_info && (
				<Box className="game_info">
					<Box
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: '-.9rem',
						}}
					>
						<h5>00:00:00</h5>
						<span
							style={{
								fontSize: '2.5rem',
								color: 'red',
								cursor: 'pointer',
							}}
							onClick={() => setMode({ type: 'CANCEL_GINFO' })}
						>
							&times;
						</span>
					</Box>
					<Box className="data">
						<Box className="p1save">
							{' '}
							<Button>Player1</Button>
							<input
								type="text"
								name="player1_team"
								value={p_data.player1_team}
								disabled="disabled"
							/>
							<input
								type="text"
								name="player1"
								value={p_data.player1}
								disabled="disabled"
							/>
							<input
								type="number"
								name="player1_goals"
								value={p1_goal}
								onChange={(ev) => setP1Goal(ev.target.value)}
								className="goals"
								placeholder="goals"
							/>
						</Box>
						<Box className="p2save">
							{' '}
							<Button>Player2</Button>
							<input
								type="text"
								value={p_data.player2_team}
								name="player2_team"
								disabled="disabled"
							/>
							<input
								type="text"
								name="player2"
								value={p_data.player2}
								disabled="disabled"
							/>
							<input
								type="number"
								className="goals"
								name="player1_goals"
								value={p2_goal}
								onChange={(ev) => setP2Goal(ev.target.value)}
								placeholder="goals"
							/>
						</Box>
					</Box>

					<input
						type="number"
						name="amount"
						className="amount"
						onChange={(ev) => setAmount(ev.target.value)}
						value={amount}
					/>
					<input
						type="text"
						name="outcome"
						disabled="disabled"
						autoComplete="off"
						placeholder="Outcome"
						className="outcome"
					/>
					<Button
						onClick={onSubmit}
						variant="outlined"
						type="submit"
						className="butt"
					>
						Save Data
					</Button>
				</Box>
			)}
		</Stack>
	);
};

export default Modes;
