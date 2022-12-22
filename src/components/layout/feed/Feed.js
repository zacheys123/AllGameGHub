import React, { useState } from 'react';
import { feed } from './feed_images';
import cod from '../../../assets/Call-of-Duty.jpg';
import cat from '../../../assets/catwoman.jpg';
import dare from '../../../assets/dare.jpg';
import dark from '../../../assets/dark.jpg';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import fifa from '../../../assets/fifa2023.avif';
import fort from '../../../assets/fort.jpg';
import gods from '../../../assets/gods.jpg';
import gta from '../../../assets/gta5.jpg';

import './feed.css';
import { SurroundSound } from '@mui/icons-material';
const Feed = () => {
	const [curr, setCurr] = useState(0);
	const data = [fifa, cod, fort, dare, cat, gods, gta, dark];

	const prevSlide = () => {
		setCurr(curr === 0 ? 7 : (prev) => prev - 1);
	};
	const nextSlide = () => {
		setCurr(curr === 7 ? 0 : (prev) => prev + 1);
	};
	return (
		<div className="slider">
			<div
				className="cont"
				style={{ transform: `translateX(-${curr * 100}vw)` }}
			>
				<img src={data[4]} alt="" />
				<img src={data[1]} alt="" />
				<img src={data[2]} alt="" />
				<img src={data[3]} alt="" />
				<img src={data[5]} alt="" />
				<img src={data[6]} alt="" />
				<img src={data[0]} alt="" />
				<img src={data[7]} alt="" />
			</div>

			<div className="icons">
				<div className="icon" onClick={prevSlide}>
					<WestIcon />
				</div>
				<div className="icon" onClick={nextSlide}>
					<EastIcon />
				</div>
			</div>
		</div>
	);
};

export default Feed;
