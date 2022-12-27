import React, { useState, useEffect, useCallback } from 'react';

import { Stack, Box, TextField, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import shortid from 'shortid';
import { useGameContext } from '../../../../context/context_/GameContext';
import gods from '../../../../assets/gods.jpg';
import gtaimg from '../../../../assets/gta5.jpg';
import pacific from '../../../../assets/pac.jpg';
import tombraid from '../../../../assets/tomb.jpg';
import nathan from '../../../../assets/nathan.jpg';
import resident from '../../../../assets/resident.jpg';
import spiderref from '../../../../assets/spider.jpg';
import unchart4 from '../../../../assets/unchartered4.jpg';
import lastimg from '../../../../assets/last.jpg';
//
import nba from '../../../../assets/nba.jpg';

import SideView from './SideView';
const Quick_Match = (props) => {
	const {
		game: { fifa },
		modes_state: { game_info, loading },
		setMode,
	} = useGameContext();

	const [loader, setLoading] = useState(false);
	const [temp_data, setTemp] = useState(
		JSON.parse(localStorage.getItem('rec_games')),
	);

	const [rec_match, setRec_match] = useState(() => {
		const storedvalues = localStorage.getItem('rec_games');
		if (!storedvalues) return [];
		return JSON.parse(storedvalues);
	});
	const [error, setError] = useState('');

	const [player_data, setPlayerData] = useState({
		player1: '',
		player2: '',
		player1_team: '',
		player2_team: '',
		telno1: '',
		telno2: '',
		station: 1,
	});

	const game_data = {
		...player_data,
		_id: shortid.generate(),
	};

	const startmatch = async (ev) => {
		ev.preventDefault();

		if (
			(player_data.player1_team &&
				player_data.player2_team &&
				player_data?.player1 &&
				player_data?.player2) ||
			player_data?.telno1 ||
			player_data?.telno2
		) {
			setTimeout(() => {
				setMode({
					type: 'GAME_INFO',
					payload: {
						game_data: JSON.parse(
							window.localStorage.getItem('game'),
						),
					},
				});
				rec_match?.push(game_data);
				window.localStorage.setItem(
					'games',
					JSON.stringify(game_data),
				);

				setTemp([...rec_match, game_data]);

				setLoading(false);
			}, 2000);

			setLoading(true);
			// window.localStorage.removeItem('games');
		} else {
			alert('Do not submit Empty Inputs');
		}
	};
	useEffect(() => {
		window.localStorage.setItem(
			'rec_games',
			JSON.stringify(rec_match),
		);
	}, [rec_match, fifa]);

	const handleChange = (ev) => {
		setPlayerData((playerdata) => ({
			...playerdata,
			[ev.target.name]: ev.target.value,
		}));
	};

	const values = { rec_match, game_data, setTemp };
	return (
		<Stack
			direction="row"
			sx={{ background: 'black', height: '80vh !important' }}
		>
			<Box
				style={{
					flex: '1.4',
					height: '70vh',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				{' '}
				<h5 style={{ color: 'white', flex: '.4' }}>Other Games</h5>
				<Box
					sx={{
						flex: '9',
						position: 'relative',
						overflowY: 'scroll',
					}}
				>
					<div className="related">
						<img src={gods} alt="" />
						<img src={gtaimg} alt="" />
						<img src={tombraid} alt="" />
						<img src={pacific} alt="" />
						<img src={unchart4} alt="" />
						<img src={spiderref} alt="" />
						<img src={nathan} alt="" />
						<img src={lastimg} alt="" />
						<img src={resident} alt="" />
						<img src={nba} alt="" />
					</div>
				</Box>
			</Box>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
				className="modeRight__quickmatch"
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						background: 'hsl(20,60%,80% )',
						height: '70vh',
					}}
				>
					<Stack
						direction="row"
						sx={{ width: '100%' }}
						justifyContent="center"
					>
						<Box className="player1">
							<h3 align="center" style={{ color: 'red' }}>
								Player1
							</h3>

							<Box className="player__control1">
								<TextField
									InputLabelProps={{ shrink: true }}
									name="player1_team"
									labelid="demo-simple-select-standard-label"
									id="demo-simple-select-standard"
									variant="filled"
									label="Enter Team *"
									sx={{ color: 'white', width: '100%' }}
									value={player_data?.player1_team}
									onChange={handleChange}
								/>
							</Box>
							<Box className="player__name">
								<TextField
									InputLabelProps={{ shrink: true }}
									sx={{ width: '100%' }}
									name="player1"
									id="demo-player1"
									variant="filled"
									value={player_data?.player1}
									labelid="demo-player1-id"
									label="Enter Player Name"
									required
									onChange={handleChange}
								/>
							</Box>
							<Box className="player__name">
								<TextField
									InputLabelProps={{ shrink: true }}
									sx={{ width: '100%' }}
									name="telno1"
									id="demo-player1"
									variant="filled"
									value={player_data?.telno1}
									labelid="demo-player1-id"
									label="Enter Tel No(optional)"
									onChange={handleChange}
								/>
							</Box>
						</Box>

						<Box className="player2">
							{' '}
							<h3 align="center" style={{ color: 'blue' }}>
								Player2
							</h3>
							<Box className="player__control1">
								<TextField
									InputLabelProps={{ shrink: true }}
									name="player2_team"
									labelid="demo-simple-select-standard-label"
									id="demo-simple-select-standard"
									label="Enter Team *"
									variant="filled"
									sx={{ width: '100%' }}
									value={player_data?.player2_team}
									onChange={handleChange}
								/>
							</Box>
							<Box className="player__name">
								<TextField
									InputLabelProps={{ shrink: true }}
									sx={{ width: '100%' }}
									name="player2"
									id="demo-player2"
									variant="filled"
									value={player_data?.player2}
									labelid="demo-player2-id"
									label="Enter Player Name"
									required
									onChange={handleChange}
								/>
							</Box>
							<Box className="player__name">
								<TextField
									InputLabelProps={{ shrink: true }}
									sx={{ width: '100%' }}
									name="telno2"
									id="demo-player2"
									variant="filled"
									value={player_data?.telno2}
									labelid="demo-player2-id"
									label="Enter Tel No(optional)"
									onChange={handleChange}
								/>
							</Box>
						</Box>
					</Stack>
					<Box className="station">
						<TextField
							InputLabelProps={{ shrink: true }}
							sx={{
								width: '20%',
								marginTop: '1rem',
								padding: ' 0.6rem',
							}}
							name="station"
							id="demo-station"
							variant="filled"
							value={player_data?.station}
							labelid="demo-station-id"
							label="Enter station category(e.g No 4){optional}"
							onChange={handleChange}
						/>
					</Box>
					<Stack
						style={{
							margin: '2rem 0 2rem 0',
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{!game_info && (
							<button
								className="button"
								value
								onClick={startmatch}
								variant="outlined"
								style={{
									// width: '40% !important',
									// padding: '.6rem 1.7rem .6rem 1.7rem',
									// marginTop: '-1rem',
									color: 'yellow',
									background: 'purple',
									// fontWeight: 'bold',
									// fontFamily: 'helveticaa',
								}}
							>
								{loader ? (
									<CircularProgress
										color="warning"
										sx={{
											fontSize: '.8rem !important',
											marginRight: '.6rem',
										}}
									/>
								) : (
									<h6>Start Match</h6>
								)}
							</button>
						)}
					</Stack>
				</div>
			</Box>

			<Box className="preview">
				<h4
					style={{
						textDecoration: 'underline',
						color: 'lightgrey',
					}}
					align="center"
				>
					Game Preview
				</h4>
				{temp_data &&
					temp_data.map((mygames) => {
						return (
							<SideView
								key={mygames._id}
								mygames={mygames}
								values={values}
							/>
						);
					})}
			</Box>
		</Stack>
	);
};

export default Quick_Match;
