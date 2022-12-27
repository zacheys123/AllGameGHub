import React, { useState, useCallback } from 'react';
import { Stack, Box, TextField, Button } from '@mui/material';
import { useGameContext } from '../../../../context/context_/GameContext';
import { Game_Reg } from '../../../../context/actions/gameSlice';
import CircularProgress from '@mui/material/CircularProgress';
const SideView = ({ mygames }, { game_data, setTemp, rec_match }) => {
	const {
		modes_state: { game_info, loading, error, iserror },
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
		p1goals: '',
		p2goals: '',
		amount: '',
		paid: '',
		outcome: '',
	});
	const setGame = useCallback(
		(ev) => {
			ev.preventDefault();

			const matchno = /^\d+$/;
			let newdata = {
				...mygames,
				...extra_data,
			};
			const currUser = JSON.parse(
				window.localStorage.getItem('profile'),
			);
			if (
				extra_data.p1goals &&
				extra_data.p2goals &&
				extra_data.amount &&
				extra_data.paid &&
				extra_data.outcome
			) {
				if (
					matchno.test(extra_data.amount) ||
					matchno.test(extra_data.paid)
					// 	extra_data.p2goals.match(matchno) ||
					// 	extra_data.amount.match(matchno) ||
					// 	extra_data.paid.match(matchno)
				) {
					Game_Reg(newdata, setMode, loading, currUser?.result?._id);
					window.localStorage.removeItem('rec_games');
					window.localStorage.removeItem('games');
				}
				setMode({
					type: 'NUMBERS',
					payload: 'Only Numbers[0-9] are allowed',
				});
			} else {
				setMode({
					type: 'EMPTY',
					payload: 'No empty inputs allowed',
				});
			}
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
	const [mybutton, setButton] = useState(true);
	const handleKey = (ev) => {
		// if (
		// 	extra_data.p1goals.length > 0 &&
		// 	extra_data.p2goals.length > 0 &&
		// 	extra_data.amount.length >= 2 &&
		// 	extra_data.paid.length >= 1 &&
		// 	extra_data.outcome.length > 0
		// ) {
		// 	setButton((prev) => !prev);
		// }
		// setButton((prev) => prev);
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
						type="text"
						style={{
							color: 'black',
							width: '95%',
							marginTop: '1rem',
						}}
						id="p1goals"
						name="p1goals"
						value={extra_data.p1goals}
						onChange={handleExtra}
						onKeyUp={handleKey}
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
						type="text"
						style={{
							color: 'black',
							width: '95%',
							marginTop: '1rem',
						}}
						id="p2goals"
						name="p2goals"
						value={extra_data.p2goals}
						onChange={handleExtra}
						onKeyUp={handleKey}
					/>
				</Box>
			</Stack>
			<Box>
				<Box className="amount">
					<label style={{ color: 'white' }} htmlFor="amount">
						Amount:
						<input
							type="text"
							name="amount"
							id="amount"
							onChange={handleExtra}
							value={extra_data?.amount}
							onKeyUp={handleKey}
						/>
					</label>
					<label style={{ color: 'white' }} htmlFor="paid">
						AmPaid:
						<input
							id="paid"
							type="text"
							name="paid"
							onChange={handleExtra}
							value={extra_data?.paid}
							onKeyUp={handleKey}
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
			{iserror && (
				<Box
					sx={{
						textAlign: 'center',
						color: 'red',
						fontWeight: 'bold',
					}}
				>
					{error}
				</Box>
			)}
			<div className="outcome">
				<input
					type="text"
					name="outcome"
					onChange={handleExtra}
					value={extra_data?.outcome}
					className="outcome"
					placeholder="Match Winner"
					onKeyUp={handleKey}
				/>
			</div>
			{mybutton && (
				<>
					<Button
						onClick={setGame}
						variant="outlined"
						type="submit"
						className="butt button"
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
				</>
			)}
		</div>
	);
};

export default SideView;
