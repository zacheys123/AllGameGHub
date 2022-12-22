import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoutes = ({ children }) => {
	const location = useLocation();
	const { user } = useSelector((state) => ({ ...state.auth }));

	if (!user?.result?._id) {
		return (
			<Navigate to="/login" state={{ from: location.pathname }} />
		);
	}
	return children;
};
export default PrivateRoutes;
