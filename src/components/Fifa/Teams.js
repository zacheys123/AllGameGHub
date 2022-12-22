import React, { useEffect, useState } from 'react';
import { useGameContext } from '../../context/context_/GameContext';

import {
	Stack,
	Box,
	Card,
	FormControl,
	Select,
	InputLabel,
	TextField,
	Button,
	Typography,
	MenuItem,
	LinearProgress,
} from '@mui/material';
import './Teams.css';
import { player1, player2 } from '../../context/actions/getLeagues';
const Teams = () => {
	const {
		modes_state: {
			player1_data,
			player2_data,
			allteams,
			loading,
			player1_auth,
			player2_auth,
			p_data,
		},
		setMode,
	} = useGameContext();

	const [category, setCategory] = useState('2');
	const [category1, setCategory1] = useState('5');
	const [loader, setLoading] = useState(true);
	// Get leagues

	useEffect(() => {
		player1(setMode, category, setLoading);
		player2(setMode, category1, setLoading);
	}, [category, category1]);

	return (
		<Stack direction="row">
			{/* <div>
			// 	<Button
			// 		onClick={() =>
			// 			setMode({
			// 				type: 'BACK',
			// 			})
			// 		}
			// 		variant="outlined"
			// 	>
			// 		Back
			// 	</Button>
			
			// </div>
	*/}
			<Box className="player1_team">
				<FormControl className="player__control">
					<InputLabel
						sx={{
							color: 'lightgrey !important',
							opacity: 0.8,
						}}
						id="demo-simple-select-standard-label"
					>
						{p_data.player1_team ? p_data.team1 : 'Player 1'}
					</InputLabel>
					<Select
						sx={{ color: 'white !important' }}
						labelid="demo-simple-select-standard-label"
						id="demo-simple-select-standard"
						label="Games"
						value={category}
						onChange={(ev) => {
							setMode({ type: 'PLAYER1_AUTH' });
							setCategory(ev.target.value);
						}}
					>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="2"
						>
							<span>English Premier League</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="3"
						>
							<span>EFL Championship</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="4"
						>
							<span>Ligue 1 fr</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="5"
						>
							<span>Ligue2 fr</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="6"
						>
							<span>Campeonato Brasileiro Serie A</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="7"
						>
							<span>Campeonato Brasileiro Serie A 🇧🇷 </span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="8"
						>
							<span>Bundesliga Germany</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="9"
						>
							<span>Bundesliga</span>
						</MenuItem>{' '}
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="14"
						>
							<span>J2 League Japan</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="10"
						>
							<span>Eredivisie Netherlands</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="11"
						>
							<span>Liga Portugal</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="13"
						>
							<span>J1 League Japan</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="16"
						>
							<span>Ekstraklasa Poland</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="18"
						>
							<span>Alsvenskan sweden</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="30"
						>
							<span>La Liga</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="24"
						>
							<span>Liga professional argentina</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="28"
						>
							<span>Serie A </span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="29"
						>
							<span>Serie B</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="12"
						>
							<span>Liga Portugal 2</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="33"
						>
							<span>La Liga 2</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="34"
						>
							<span>First Division A Belgium</span>
						</MenuItem>
					</Select>
				</FormControl>
				<Box className="team1_display">
					{loader ? (
						<Box className="teams">
							{player1_data &&
								player1_data?.map((teams) => {
									return (
										<div
											className="team"
											onClick={(ev) => {
												setMode({
													type: 'PLAYER1',
													payload: ev.target.alt,
												});
											}}
											key={teams.team_id}
										>
											<img src={teams.logo} alt={teams.name} />
											<h6
												style={{ fontSize: '.7rem', color: 'white' }}
											>
												{teams.name}
											</h6>
										</div>
									);
								})}
						</Box>
					) : (
						<Stack
							sx={{ width: '100%', color: 'grey.500' }}
							spacing={2}
						>
							<LinearProgress color="secondary" />
							<LinearProgress color="success" />
							<LinearProgress color="success" />
							<LinearProgress color="inherit" />
						</Stack>
					)}
				</Box>
			</Box>
			<Box className="player2_team">
				<FormControl className="player__control">
					<InputLabel
						sx={{
							color: 'lightgrey !important',
							opacity: 0.8,
						}}
						id="demo-simple-select-standard-label"
					>
						{p_data.player2_team ? p_data.team1 : 'Player 2'}
					</InputLabel>
					<Select
						sx={{ color: 'white !important' }}
						labelid="demo-simple-select-standard-label"
						id="demo-simple-select-standard"
						label="Games"
						value={category1}
						onChange={(ev) => {
							setMode({ type: 'PLAYER2_AUTH' });
							setCategory1(ev.target.value);
						}}
					>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="2"
						>
							<span>English Premier League</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="3"
						>
							<span>EFL Championship</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="4"
						>
							<span>Ligue 1 FR</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="5"
						>
							<span>Ligue2 FR</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="6"
						>
							<span>Campeonato Brasileiro Serie A BR</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="7"
						>
							<span>Campeonato Brasileiro Serie A BR</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="8"
						>
							<span>Bundesliga Ger</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="9"
						>
							<span>Bundesliga Ger</span>
						</MenuItem>{' '}
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="14"
						>
							<span>J2 League Japan</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="10"
						>
							<span>Eredivisie Netherlands</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="11"
						>
							<span>Liga Portugal</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="13"
						>
							<span>J1 League Japan</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="16"
						>
							<span>Ekstraklasa Poland</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="18"
						>
							<span>Alsvenskan sweden</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="30"
						>
							<span>La Liga</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="24"
						>
							<span>Liga professional argentina</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="28"
						>
							<span>Serie A </span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="29"
						>
							<span>Serie B</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="12"
						>
							<span>Liga Portugal 2</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="33"
						>
							<span>La Liga 2</span>
						</MenuItem>
						<MenuItem
							onClick={() => setMode({ type: 'TEAMS' })}
							value="34"
						>
							<span>First Division A Belgium</span>
						</MenuItem>
					</Select>
				</FormControl>
				<Box className="team2_display">
					{loader ? (
						<Box className="teams">
							{player2_data &&
								player2_data?.map((teams) => {
									return (
										<div
											className="team"
											onClick={(ev) => {
												setMode({
													type: 'PLAYER2',
													payload: ev.target.alt,
												});
											}}
											key={teams.team_id}
										>
											<img src={teams.logo} alt={teams.name} />
											<h6
												style={{ fontSize: '.7rem', color: 'white' }}
											>
												{teams.name}
											</h6>
										</div>
									);
								})}
						</Box>
					) : (
						<Stack
							sx={{ width: '100%', color: 'grey.500' }}
							spacing={2}
						>
							<LinearProgress color="secondary" />
							<LinearProgress color="success" />
							<LinearProgress color="success" />
							<LinearProgress color="inherit" />
						</Stack>
					)}
				</Box>
			</Box>
		</Stack>
	);
};

export default Teams;
