import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';
import MainContext from './context/context_/MainContext';
import GameContext from './context/context_/GameContext';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<MainContext>
				<GameContext>
					{' '}
					<App />
				</GameContext>
			</MainContext>
		</Provider>
	</React.StrictMode>,
);
