import React, { useState, useCallback } from 'react';
import { Stack, Box, TextField, Button } from '@mui/material';
import { useGameContext } from '../../../../context/context_/GameContext';
import { Game_Reg } from '../../../../context/actions/gameSlice';
import CircularProgress from '@mui/material/CircularProgress';
const SideView = ({ mygames }, { game_data, setTemp, rec_match }) => {
	const {
		modes_state: { game_info, loading, error },
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

	const [extra_data, setExtraData] = useState({
		p1goals: 0,
		p2goals: 0,
		amount: 0,
		paid: 0,
		outcome: '',
	});
	const setGame = useCallback(
		(ev) => {
			ev.preventDefault();
			if (
				!extra_data.player1_goal.match(matchno) ||
				!extra_data.player2_goal.match(matchno) ||
				!extra_data.amount.match(matchno) ||
				!extra_data.paid.match(matchno)
			) {
				setMode({ type: 'NUMBERS', payload: 'Only numbers allowed' });
			}
			const matchno = /^[0,9]+$/;
			let newdata = {
				...mygames,
				...extra_data,
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
					<h6 style={{ color: 'red' }}>{player1?.toUpperCase()}</h6>
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
						id="p1goals"
						name="p1goals"
						value={extra_data.p1goals}
						onChange={handleExtra}
					/>
				</Box>

				<Box className="p2">
					{' '}
					<h6 style={{ color: 'red' }}>{player2?.toUpperCase()}</h6>
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
							width: '95%',
							marginTop: '1rem',
						}}
						id="p2goals"
						name="p2goals"
						value={extra_data.p2goals}
						onChange={handleExtra}
					/>
				</Box>
			</Stack>
			<Box>
				<Box className="amount">
					<label style={{ color: 'white' }} htmlFor="amount">
						Amount:
						<input
							type="number"
							name="amount"
							id="amount"
							onChange={handleExtra}
							value={extra_data?.amount}
						/>
					</label>
					<label style={{ color: 'white' }} htmlFor="paid">
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
			>
				{error}
			</Box>

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
