import { Stack } from '@mui/material';
import Header from '../Header';
import './Layout.css';
const Layout = ({ children }) => {
	return (
		<Stack direction="row" className="layout">
			{children}
		</Stack>
	);
};

export default Layout;
