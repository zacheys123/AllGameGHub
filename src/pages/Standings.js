import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
	Stack,
	Box,
	Container,
	TextField,
	Button,
	Select,
	FormControl,
	MenuItem,
	InputLabel,
} from '@mui/material';
import { Alert } from 'react-bootstrap';
import '../css/Summary.css';
import { getStandings } from '../context/actions/getLeagueStandings';
import { getFixtures } from '../context/actions/getfixtures';
import { useGameContext } from '../context/context_/GameContext';
const Standings = () => {
	const [standings, setStandings] = useState('39');
	const [loading, setLoading] = useState(false);
	const [fixtures, setFixtures] = useState(false);

	const [date, getDate] = useState(new Date().toLocaleDateString());
	console.log();
	const [searchQuery, setSearchQuery] = useState('');
	const [year, getYear] = useState('2022');
	const {
		game: { fifa, goa, gta, head, team_standings, team_fixtures },
		modes_state: { mode_choice },
		setMode,
		setGame,
	} = useGameContext();
	const handleChange = (event) => {
		setStandings(event.target.value);
	};

	const getStand = useCallback(() => {
		getStandings(standings, year, setLoading, setGame);
	}, [standings, year]);

	useEffect(() => {
		let subscribed = false;

		getStand();

		return () => {
			subscribed = true;
		};
	}, []);
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		getFixtures(date, setLoading, setGame, cancelToken);

		return () => {
			cancelToken.cancel();
		};
	}, [date]);
	const filter_fixtures = () => {
		let new_fixtures = team_fixtures;

		if (searchQuery) {
			new_fixtures = new_fixtures.filter((fixture) => {
				return fixture?.league?.name
					.toLowerCase()
					.includes(searchQuery);
			});
		}
		return new_fixtures;
	};
	return (
		<Box className="all__games">
			{loading && (
				<Alert className="alert alert-danger text-center w-100">
					Data is Being Processed,Be Patient
				</Alert>
			)}
			{!fixtures ? (
				<>
					<Stack
						direction="row"
						align="center"
						justify="center"
						style={{
							justifyContent: 'center',
							margin: '0 auto',
						}}
					>
						<FormControl
							style={{
								zIndex: '999',
								margin: '0.7rem 0 2rem 6rem',
								width: '17rem',
							}}
						>
							<InputLabel>All Leagues</InputLabel>
							<Select
								sx={{ color: 'black !important' }}
								labelId="demo-simple-select-standard-label"
								id="demo-simple-select-standard"
								label="Games"
								value={standings}
								onChange={handleChange}
							>
								<MenuItem value="39" onClick={getStand}>
									<span>English Premier League</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="20">
									<span>EFL Championship</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="61">
									<span>Ligue 1 FR</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="62">
									<span>Ligue2 FR</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="71">
									<span>Campeonato Brasileiro Serie A BR</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="72">
									<span>Campeonato Brasileiro Serie A BR</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="78">
									<span>Bundesliga Ger</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="79">
									<span>Bundesliga Ger</span>
								</MenuItem>{' '}
								<MenuItem onClick={getStand} value="99">
									<span>J2 League Japan</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="88">
									<span>Eredivisie Netherlands</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="94">
									<span>Liga Portugal</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="98">
									<span>J1 League Japan</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="106">
									<span>Ekstraklasa Poland</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="113">
									<span>Alsvenskan sweden</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="140">
									<span>La Liga</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="129">
									<span>Liga professional argentina</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="135">
									<span>Serie A </span>
								</MenuItem>
								<MenuItem onClick={getStand} value="136">
									<span>Serie B</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="95">
									<span>Liga Portugal 2</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="141">
									<span>La Liga 2</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="144">
									<span>First Division A Belgium</span>
								</MenuItem>
							</Select>
						</FormControl>
						<FormControl
							style={{
								zIndex: '999',
								margin: '0.7rem auto 2rem 6rem',
								width: '10rem',
							}}
						>
							<InputLabel>All Seasons</InputLabel>
							<Select
								sx={{ color: 'black !important' }}
								labelId="demo-simple-select-standard-label"
								id="demo-simple-select-standard"
								label="Games"
								value={year}
								onChange={(ev) => getYear(ev.target.value)}
							>
								<MenuItem onClick={getStand} value="2001">
									<span>2001</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2002">
									<span>2002</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2003">
									<span>2003</span>
								</MenuItem>

								<MenuItem onClick={getStand} value="2004">
									<span>2004</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2005">
									<span>2005</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2006">
									<span>2006</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2007">
									<span>2007</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2008">
									<span>2008</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2009">
									<span>2009</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2010">
									<span>2010</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2012">
									<span>2012</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2013">
									<span>2013</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2014">
									<span>2014</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2015">
									<span>2015</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2016">
									<span>2016</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2017">
									<span>2017</span>
								</MenuItem>
								<MenuItem onClick={getStand} value="2018">
									<span>2018</span>
								</MenuItem>

								<MenuItem onClick={getStand} value="2020">
									<span>2019</span>
								</MenuItem>

								<MenuItem onClick={getStand} value="2021">
									<span>2020-2021</span>
								</MenuItem>

								<MenuItem onClick={getStand} value="2022">
									<span>2022-2023</span>
								</MenuItem>
							</Select>
						</FormControl>
					</Stack>

					<Box style={{ zIndex: '999', color: 'black !important' }}>
						{' '}
						<table className="table table-bordered bg-dark table-stripped">
							<thead>
								<tr
									className="fw-bold text-danger"
									style={{ textAlign: 'center' }}
								>
									<td>Rank</td>
									<td>Team</td>
									<td>P</td>
									<td>GD</td>
									<td>D</td>
									<td>L</td>
									<td>W</td>
									<td>FORM</td>
									<td>POINTS</td>
								</tr>
							</thead>
							{team_standings &&
								team_standings?.map((standing) => {
									return (
										<tbody key={standing.team.id}>
											<tr
												className="fw-bold-300 text-light"
												style={{ textAlign: 'center' }}
											>
												<td>{standing?.rank}</td>
												<td>{standing?.team?.name}</td>
												<td>{standing?.all?.played}</td>
												<td>{standing?.goalsDiff}</td>
												<td>{standing?.all?.draw}</td>
												<td>{standing?.all?.lose}</td>
												<td>{standing?.all?.win}</td>
												<td>{standing?.form}</td>
												<td>{standing?.points}</td>
											</tr>
										</tbody>
									);
								})}
						</table>
					</Box>
				</>
			) : (
				<Box className="main_fixtures">
					<Stack>
						<input
							type="date"
							value={date}
							onChange={(ev) => getDate(ev.target.value)}
							style={{
								width: '90%',
								margin: '2rem auto 2rem auto',
								background: 'black',
								padding: '1rem',
								fontFamily: 'georgia',
								color: 'white',
							}}
						/>
						<div
							style={{
								width: '40%',
								margin: '1rem auto .2rem auto',
								background: 'grey',
								opacity: '.8',
								borderRadius: '25px',
								padding: '.7rem',
								fontFamily: 'georgia',
								color: 'white',
							}}
						>
							<input
								style={{
									width: '100%',
									outline: 'none',
									background: 'inherit',
									border: 'none',
									color: 'white',
									fontFamily: 'ariel',
									fontWeight: 'bold',
								}}
								value={searchQuery}
								onChange={(ev) => setSearchQuery(ev.target.value)}
								type="text"
								placeholder="Search league/team"
							/>
						</div>
					</Stack>
					{team_fixtures &&
						filter_fixtures().map((fixture) => {
							return (
								<Box className="fixtures" key={fixture.fixture_id}>
									<Box className="header__fixture">
										{' '}
										<span>
											<img src={fixture?.league?.logo} alt="" />
										</span>
										<span>{fixture?.league?.name}</span>
									</Box>

									<Box className="fixtures__data">
										<Box className=" home__team">
											{' '}
											<span>
												<img src={fixture.homeTeam.logo} alt="" />
											</span>
											<span>{fixture.homeTeam.team_name}</span>
										</Box>
										<Box className="away__team">
											<span>{fixture.awayTeam.team_name}</span>
											<span>
												<img src={fixture.awayTeam.logo} alt="" />
											</span>
										</Box>
										<Box className="half">
											HT '{fixture.score.halftime}'
										</Box>
										<Box className="full">
											FT '{fixture.score.fulltime}'
										</Box>{' '}
										<Box className="status">
											{fixture.event_date.split('T')[1].split('+')[0]}
										</Box>
										` `<Box className="status">{fixture.status}</Box>{' '}
									</Box>
								</Box>
							);
						})}
				</Box>
			)}
			<Button
				variant="contained"
				onClick={() => setFixtures((prev) => !prev)}
			>
				{!fixtures ? <h4>Fixtures</h4> : <h4>Standings</h4>}
			</Button>
		</Box>
	);
};

export default Standings;
