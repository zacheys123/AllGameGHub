import styled from 'styled-components';
//
const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px',
};

//
export const device = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopL: `(max-width: ${size.laptopL})`,
	desktop: `(max-width: ${size.desktop})`,
	desktopL: `(max-width: ${size.desktop})`,
};

//

export const MainStack = styled.div`
	display: flex;

	flex-direction: row;
	@media ${device.mobileL} and (max-width: ${device.mobileS}) {
		flex-direction: column;
	}
`;
export const Main = styled.div`
	height: 84.5vh;
	flex: 8;
	background: ${({ istheme }) => (istheme ? 'white' : 'black')};

	/* media query */
	@media ${device.tablet} {
		flex: 7;
	}
`;
export const Left_Bar = styled.div`
	height: 84.5vh;
	flex: 2;
	background: ${({ istheme }) => (istheme ? 'black' : 'black')};
	h4 {
		color: white;
		margin-top: 0.5rem;
	}
	h6 {
		color: white;
		margin-top: 1rem;
	}
	button {
		margin-top: 1rem;
	}
	/* media query */
	@media ${device.tablet} {
		flex: 3;
	}
`;
export const Image_Data = styled.div`
	display: flex;
	flex-direction: column;
	img {
		height: 100%;
		width: 100%;
	}
`;

export const Profile_Data = styled.div`
	margin-top: 1.7rem;
	color: ${({ istheme }) =>
		istheme ? 'white !important' : 'black !important'};

	background: ${({ disabled }) => (!disabled ? 'white' : 'black')};

	input[type='text'] {
		border: none;
		width: 100%;
	}
`;
export const Validate = styled.div`
	background: ${({ showValidate }) => (!showValidate ? '' : 'black')};
`;
