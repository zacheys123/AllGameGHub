import React, {
	useState,
	useEffect,
	useRef,
	useCallback,
} from 'react';
import '../css/Games.css';
import {
	Stack,
	Box,
	Container,
	TextField,
	Button,
	Select,
	FormControl,
	MenuItem,
	Typography,
} from '@mui/material';
import Game__Data from '../components/Fifa/game_data/Game__Data';
import { useGameContext } from '../context/context_/GameContext';
import { useMainContext } from '../context/context_/MainContext';
import {
	setFree,
	setAmateur,
	setWorld,
	setPremium,
} from '../components/fifa_actions/gamesreducer';
import { fifa_action } from '../components/fifa_actions/actions';
import Standings from './Standings';
import cod from '../assets/cod.jpg';
import ghostrec from '../assets/ghostrecon.jpg';
import fifaimg from '../assets/fifa23.webp';
import fortref from '../assets/fort.jpg';
import gods from '../assets/gods.jpg';
import gtaimg from '../assets/gta5.jpg';
import pacific from '../assets/pac.jpg';
import tombraid from '../assets/tomb.jpg';
import nathan from '../assets/nathan.jpg';
import resident from '../assets/resident.jpg';
import spiderref from '../assets/spider.jpg';
import unchart4 from '../assets/unchartered4.jpg';
import lastimg from '../assets/last.jpg';
//
import nba from '../assets/nba.jpg';
import assasins from '../assets/assasins.jpg';
import wwe from '../assets/wwe.jpg';
import witch from '../assets/witch.jpg';
import avengers from '../assets/avengers.webp';
import tushima from '../assets/tushima.webp';
import mordern from '../assets/mordern.jpg';
import immortals from '../assets/immortals.webp';
import control from '../assets/control.webp';
import jumanji from '../assets/jumanji.jpg';
import metro from '../assets/metro.webp';
import 'aos/dist/aos.css';
import Aos from 'aos';
const Game = (props) => {
	const data = useRef(false);
	const [showfifa, setShow] = useState((prev) => {
		if (data.current) {
			if (prev) {
				return false;
			}
		}
		return true;
	});

	const { setGame, setMode } = useGameContext();
	const {
		main: { userInfo },

		setMainContext,
	} = useMainContext();

	useEffect(() => {
		setGame({ type: 'SETUSER', payload: props.child_userdata });
	}, [props.child_userdata]);

	const fifaref = useRef('data');
	const ghost = useRef();
	const god = useRef();
	const res = useRef();
	const fort = useRef();
	const gtaref = useRef();
	const unchartered = useRef();
	const witcher = useRef();
	const uncharted4 = useRef();
	const tomb = useRef();
	const pacificrim = useRef();
	const spider = useRef();
	const last = useRef();
	const callref = useRef();
	const nbaref = useRef();
	const assasref = useRef();
	const wweref = useRef();
	const avengersref = useRef();
	const tushimaref = useRef();
	const mordernref = useRef();
	const immortalsref = useRef();
	const controlref = useRef();
	const jumanjiref = useRef();
	const metroref = useRef();

	const allrefs = {
		fifaref,
		ghost,
		god,
		res,
		fort,
		gtaref,
		unchartered,
		witcher,
		uncharted4,
		tomb,
		pacificrim,
		spider,
		last,
		callref,
		nbaref,
		assasref,
		wweref,
		avengersref,
		tushimaref,
		mordernref,
		immortalsref,
		controlref,
		jumanjiref,
		metroref,
	};

	useEffect(() => {
		console.log(data);
		data.current = true;
		if (data.current) {
			setTimeout(() => {
				switch (userInfo) {
					case 'Free':
						setFree(allrefs);
					case 'Amateur':
						setAmateur(allrefs);
					case 'World':
						setWorld(allrefs);
					case 'Premium':
						setPremium(allrefs);
				}
			}, 2000);
		}
		return () => (data.current = false);
	}, []);
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	useEffect(() => {
		data.current = false;
		return () => (data.current = false);
	}, []);

	//function to disaply fifa page
	const [info_data, setInfo] = useState('Choose Games');
	const fifaMode = useCallback(() => {
		setInfo(() => 'Fifa World Football');
		fifa_action(setShow, setGame);
	}, [showfifa]);
	return (
		<Box className="main__games">
			<Box className="maingame__header">
				<h1 style={{ color: 'white', textAlign: 'center' }}>
					{info_data}
				</h1>
			</Box>
			<Box className="maingames__container">
				{showfifa ? (
					<Box className="choice">
						<div data-aos="zoom-in" ref={fifaref} onClick={fifaMode}>
							<img src={fifaimg} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								FIFA football
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={ghost}>
							<img src={ghostrec} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Ghost_Recon
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={god}>
							<img src={gods} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								God of war
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={res}>
							<img src={resident} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Resident Evil 2
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={gtaref}>
							<img src={gtaimg} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								{' '}
								Grand Theft Auto V
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={unchartered}>
							<img src={nathan} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								{' '}
								Uncharted: The Nathan Drake Collection
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={fort}>
							<img src={fortref} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Fortnite
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={uncharted4}>
							<img src={unchart4} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								{' '}
								Uncharted 4: A Thief's End
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={tomb}>
							<img src={tombraid} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Tomb Raider:Lara Croft
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={pacificrim}>
							<img src={pacific} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Pacific Rim
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={spider}>
							<img src={spiderref} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Spider-Man
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={last}>
							<img src={lastimg} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								The Last Of Us
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={jumanjiref}>
							<img src={jumanji} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Jumanji The Video Game
							</Typography>
						</div>

						<div data-aos="zoom-in" ref={callref}>
							<img src={cod} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Call Of Duty
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={witcher}>
							<img src={witch} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Witcher
							</Typography>
						</div>
						{/*  */}
						<div data-aos="zoom-in" ref={nbaref}>
							<img src={nba} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Nba 2K{' '}
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={assasref}>
							<img src={assasins} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Assasins Creed Unity/Valhalla
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={wweref}>
							<img src={wwe} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								WWE 2k
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={avengersref}>
							<img src={avengers} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Avengers
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={tushimaref}>
							<img src={tushima} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Ghost of Tushima
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={mordernref}>
							<img src={mordern} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Modern Warfare
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={immortalsref}>
							<img src={immortals} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Immortal Fenyx Rising
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={controlref}>
							<img src={control} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Control
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={jumanjiref}>
							<img src={jumanji} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Jumanji The Video Game
							</Typography>
						</div>
						<div data-aos="zoom-in" ref={metroref}>
							<img src={metro} alt="" />
							<Typography sx={{ color: 'yellow' }} variant="body">
								Metro Redux
							</Typography>
						</div>
					</Box>
				) : (
					<Game__Data />
				)}
			</Box>
		</Box>
	);
};

export default Game;
