import React from 'react';
import { Stack, Box, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.jpg';

import { useMainContext } from '../context/context_/MainContext';
import { ToggleOn, ToggleOff } from '@mui/icons-material';

const Theme = () => {
	const {
		main: { istheme, currentuser },
		setMainContext,
	} = useMainContext();
	return (
		<Stack>
			<div>
				{istheme ? (
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<ToggleOff
							sx={{
								fontSize: {
									sx: '.7rem',
									sm: '3rem',
									color: 'black',
									cursor: 'pointer',
								},
							}}
							onClick={() =>
								setMainContext({
									type: 'UPDATE_THEME',
									payload: istheme,
								})
							}
						/>
						<span>dark mode</span>
					</Box>
				) : (
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<ToggleOn
							sx={{
								fontSize: {
									sx: '.7rem',
									sm: '3rem',
									color: 'white',
									cursor: 'pointer',
								},
							}}
							onClick={() =>
								setMainContext({
									type: 'UPDATE_THEME',
									payload: istheme,
								})
							}
						/>
						<span>light mode</span>
					</Box>
				)}
			</div>
		</Stack>
	);
};

export default Theme;
