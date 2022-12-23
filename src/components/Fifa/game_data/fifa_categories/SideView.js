import React, { useState, useCallback } from 'react';
import { Stack, Box, TextField, Button } from '@mui/material';
import { useGameContext } from '../../../../context/context_/GameContext';
import { Game_Reg } from '../../../../context/actions/gameSlice';
import CircularProgress from '@mui/material/CircularProgress';
const SideView = ({ mygames }, { game_data, setTemp, rec_match }) => {
	const {
		modes_state: { game_info, loading },
		setMode,
	} = useGameContext();
	const {
		_id,
		player1,
		player2,
		player1_team,
		player2_team,
		station,
	} = mygames;
	const [p1_goal, setp1_goal] = useState('');
	const [p2_goal, setp2_goal] = useState('');
	const [extra_data, setExtraData] = useState({
		amount: '',
		paid: '',
		outcome: '',
	});
	const setGame = useCallback(
		(ev) => {
			ev.preventDefault();
			const matchno = /^[0,9]+$/;
			let newdata = {
				...mygames,
				...extra_data,
				p1_goal,
				p2_goal,
			};
			const currUser = JSON.parse(
				window.localStorage.getItem('profile'),
			);
			Game_Reg(newdata, setMode, loading, currUser?.result?._id);
		},
		[extra_data, mygames],
	);
	const handleExtra = (ev) => {
		setExtraData((extra_data) => {
			return { ...extra_data, [ev.target.name]: ev.target.value };
		});
	};

	const remove = (index) => {
		// window.localStorage.getItem('rec_games');
		// rec_match.splice(index, 1);
		// window.localStorage.setItem(
		// 	'rec_games',
		// 	JSON.stringify([...rec_match, game_data]),
		// );

		const newGames = rec_match.filter((gam) => gam._id !== index);
		setTemp(newGames);
	};

	return (
		<div>
			<Stack direction="row" justifyContent="space-between">
				<Box className="p1">
					<h6 style={{ color: 'blue' }}>{player1?.toUpperCase()}</h6>
					<input
						type="text"
						disabled
						className="player1"
						name="player1_team"
						value={player1_team}
						placeholder="Team one"
					/>
					<input
						type="number"
						style={{
							color: 'black',
							width: '95%',
							marginTop: '1rem',
						}}
						name="player1_goals"
						value={p1_goal}
						onChange={(ev) => setp1_goal(ev.target.value)}
					/>
				</Box>

				<Box className="p2">
					{' '}
					<h6 style={{ color: 'blue' }}>{player2?.toUpperCase()}</h6>
					<input
						disabled
						type="text"
						className="player2"
						name="player2_team"
						value={player2_team}
						placeholder="Team two"
					/>
					<input
						type="number"
						style={{
							color: 'black',
							width: '90%',
							marginTop: '1rem',
						}}
						name="player2_goals"
						value={p2_goal}
						onChange={(ev) => setp2_goal(ev.target.value)}
					/>
				</Box>
			</Stack>
			<Box>
				<Box className="amount">
					<label style={{ color: 'black' }} htmlFor="amount">
						Amount:
						<input
							type="number"
							name="amount"
							id="amount"
							onChange={handleExtra}
							value={extra_data?.amount}
						/>
					</label>
					<label style={{ color: 'black' }} htmlFor="paid">
						AmPaid:
						<input
							id="paid"
							type="number"
							name="paid"
							onChange={handleExtra}
							value={extra_data?.paid}
						/>
					</label>
				</Box>{' '}
				<Box
					sx={{
						margin: '.7rem auto .7rem auto',
					}}
				>
					{' '}
					<label htmlFor="station" style={{ color: 'red' }}>
						Station No:
						<input
							style={{ color: 'black', width: '50%' }}
							type="text"
							value={station}
							disabled
						/>
					</label>{' '}
				</Box>
			</Box>
			<Box
				sx={{
					textAlign: 'center',
					color: 'red',
					fontWeight: 'bold',
				}}
			></Box>

			<div className="outcome">
				<input
					type="text"
					name="outcome"
					onChange={handleExtra}
					value={extra_data?.outcome}
					className="outcome"
					placeholder="Match Winner"
				/>
			</div>
			<Button
				onClick={setGame}
				variant="outlined"
				type="submit"
				className="butt"
			>
				{loading ? (
					<CircularProgress
						color="secondary"
						sx={{
							fontSize: '.6rem !important',
							marginRight: '.6rem',
						}}
					/>
				) : (
					<> End/Save Match</>
				)}
			</Button>
			<Button
				variant="outlined"
				type="submit"
				onClick={() => remove(_id)}
				className="butt"
			>
				Remove
			</Button>
		</div>
	);
};

export default SideView;
