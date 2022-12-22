import React from 'react';
import '../css/Overlay.css';
import { Stack, Box, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useMainContext } from '../context/context_/MainContext';
const OverLay = () => {
	const { main: overlay, setMainContext } = useMainContext();
	return (
		<Container
			sx={{
				background: 'black',
				position: 'absolute',
				height: '75vh',
				width: '100%',
				marginRight: '20rem',
				top: '7rem',
			}}
		>
			<Box className="head">
				<CloseIcon
					onClick={() => setMainContext({ type: 'OVERLAY' })}
				/>
			</Box>
		</Container>
	);
};

export default OverLay;
