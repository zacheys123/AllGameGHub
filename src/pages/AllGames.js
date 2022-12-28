import {
	Box,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Stack,
	Skeleton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useGameContext } from '../context/context_/GameContext';
import { useMainContext } from '../context/context_/MainContext';

import '../css/Summary.css';
import { useNavigate } from 'react-router-dom';
const AllGames = () => {
	const [loading, setLoading] = useState(true);
	const [searchquery, setQuery] = useState('');
	const {
		game: { allgames, currentUser },
		setGame,
	} = useGameContext();
	const {
		main: { istheme },
	} = useMainContext();
	const currUser = JSON.parse(window.localStorage.getItem('profile'));

	const getgames = async (source) => {
		try {
			setLoading(true);
			let response = await axios.get(
				`${process.env.REACT_APP_HOST}/${currUser?.result?._id}`,
				{
					cancelToken: source.token,
				},
			);
			setGame({ type: 'LOAD_GAMES', payload: response.data.result });
			setLoading(false);
		} catch (error) {
			setLoading(true);
			setGame({ type: 'ERROR_GAMES' });
		} finally {
			setGame({ type: 'ERROR_GAMES' });
		}
	};

	useEffect(() => {
		const source = axios.CancelToken.source();
		getgames(source);

		return () => {
			source.cancel();
		};
	}, []);
	const navigate = useNavigate();

	const searchInput = () => {
		let sortedvalue = allgames?.games;
		if (searchquery) {
			sortedvalue = sortedvalue.filter((choose_game) => {
				if (
					choose_game.player1.toLowerCase().includes(searchquery) ||
					choose_game.player2.toLowerCase().includes(searchquery) ||
					choose_game.player1_team
						.toLowerCase()
						.includes(searchquery) ||
					choose_game.player2_team
						.toLowerCase()
						.includes(searchquery) ||
					choose_game.created_at.toLowerCase().includes(searchquery)
				) {
					return sortedvalue;
				}
			});
		}
		return sortedvalue;
	};

	return (
		<Box
			className="all__games"
			style={{ background: istheme ? 'white' : 'black' }}
		>
			<Box
				style={{
					background: !istheme ? 'red !important' : 'white',
				}}
			>
				{' '}
				<header
					className="header"
					style={{
						background: !istheme ? 'red !important' : 'white',
					}}
				>
					<h4 align="center"> Data Hub</h4>
				</header>
			</Box>

			<Box className="players">
				<Box
					sx={{
						width: '40%',
						padding: '.7rem',
						borderRadius: '50px',
						background: !istheme ? 'lightgrey' : 'grey',
						display: 'flex',
						margin: '1rem  auto 0 auto ',
						alignItems: 'center',
					}}
				>
					<input
						type="text"
						placeholder="Search by: (player,team,date)"
						value={searchquery}
						onChange={(ev) => setQuery(ev.target.value)}
						style={{
							outline: 'none',
							border: 'none',
							flex: 1,
							marginLeft: '.6rem',
							background: 'inherit',
							color: !istheme ? 'black' : 'white',
							fontWeight: 'bold',
							display: 'flex',
						}}
					/>
					<SearchIcon
						className="search_"
						sx={{
							cursor: 'pointer',
							fontSize: '2rem',
							color: 'white',
						}}
					/>
				</Box>
				{loading ? (
					<Stack style={{ display: 'flex', flexWrap: 'wrap' }}>
						<Stack spacing={1}>
							{/* For variant="text", adjust the height via font-size */}
							<Skeleton
								variant="text"
								sx={{
									fontSize: '1rem',
									background: !istheme ? 'lightgrey' : 'grey',
								}}
							/>

							{/* For other variants, adjust the size with `width` and `height` */}
							<Skeleton
								variant="circular"
								width={40}
								height={40}
								sx={{
									fontSize: '1rem',
									background: !istheme ? 'lightgrey' : 'grey',
								}}
							/>
							<Skeleton
								variant="rectangular"
								width={210}
								height={60}
								sx={{
									fontSize: '1rem',
									background: !istheme ? 'lightgrey' : 'grey',
								}}
							/>
							<Skeleton
								variant="rounded"
								width={210}
								height={60}
								sx={{
									fontSize: '1rem',
									background: !istheme ? 'lightgrey' : 'grey',
								}}
							/>
						</Stack>
						<Stack spacing={1}>
							{/* For variant="text", adjust the height via font-size */}
							<Skeleton
								variant="text"
								sx={{
									fontSize: '1rem',
									background: !istheme ? 'lightgrey' : 'grey',
								}}
							/>

							{/* For other variants, adjust the size with `width` and `height` */}
							<Skeleton
								variant="circular"
								width={40}
								height={40}
								sx={{
									fontSize: '1rem',
									background: !istheme ? 'lightgrey' : 'grey',
								}}
							/>
							<Skeleton
								variant="rectangular"
								width={210}
								height={60}
								sx={{
									fontSize: '1rem',
									background: !istheme ? 'lightgrey' : 'grey',
								}}
							/>
							<Skeleton variant="rounded" width={210} height={60} />
						</Stack>
						<Stack spacing={1}>
							{/* For variant="text", adjust the height via font-size */}
							<Skeleton
								variant="text"
								sx={{
									fontSize: '1rem',
									background: !istheme ? 'lightgrey' : 'grey',
								}}
							/>

							{/* For other variants, adjust the size with `width` and `height` */}
							<Skeleton
								variant="circular"
								width={40}
								height={40}
								sx={{
									fontSize: '1rem',
									background: !istheme ? 'lightgrey' : 'grey',
								}}
							/>
							<Skeleton
								variant="rectangular"
								width={210}
								height={60}
								sx={{
									fontSize: '1rem',
									background: !istheme ? 'lightgrey' : 'grey',
								}}
							/>
							<Skeleton
								variant="rounded"
								width={210}
								height={60}
								sx={{
									fontSize: '1rem',
									background: !istheme ? 'lightgrey' : 'grey',
								}}
							/>
						</Stack>
					</Stack>
				) : (
					<div style={{ width: '98%', margin: '0.5rem auto' }}>
						<table className="table table-bordered table-stripped">
							<thead>
								<tr
									className="bg-dark"
									style={{ color: istheme ? 'white' : 'yellow' }}
								>
									<th>Player1</th>
									<th>Player2</th>
									<th>Player1_Team</th>
									<th>Player2_Team</th>
									<th>Player1_Score</th>
									<th>Player2_Score</th>
									<th>Outcome</th>
									<th>Station No</th>
									<th>Amount</th>
									<th>Amount Paid</th>
									<th style={{ color: istheme ? 'red' : 'red' }}>
										Balance
									</th>
								</tr>
							</thead>
							{searchInput()?.map((game, index) => {
								return (
									<tbody key={index}>
										<tr
											style={{
												color: !istheme ? 'white' : 'black',
											}}
										>
											<td>{game.player1}</td>
											<td>{game.player2}</td>
											<td>{game.player1_team}</td>
											<td>{game.player2_team}</td>
											<td>{game.player1_goals}</td>
											<td>{game.player2_goals}</td>
											<td>{game.outcome}</td>
											<td>{game.station}</td>
											<td>{game.amount}</td>
											<td>{game.paid}</td>
											<td>{parseFloat(game.amount - game.paid)}</td>
										</tr>
									</tbody>
								);
							})}
						</table>
					</div>
				)}
			</Box>
		</Box>
	);
};

export default AllGames;
