export const gamereducer = (state = {}, action) => {
	switch (action.type) {
		case 'FIFA':
			return {
				...state,
				fifa: !action.payload,
				goa: state.goa,
				gta: state.gta,
				head: state.head,
				standings_check: true,
			};
		case 'GOD_OF_WAR':
			return {
				...state,
				fifa: !action.payload,
				goa: action.payload,
				gta: !action.payload,
				head: !action.payload,
				standings_check: true,
			};
		case 'GTA':
			return {
				...state,
				fifa: !action.payload,
				goa: !action.payload,
				gta: action.payload,
				head: true,
				standings_check: true,
			};
		case 'GHOST_RECON':
			return {
				...state,
				fifa: false,
				goa: false,
				gta: !action.payload,
				head: true,
				standings_check: true,
			};
		case 'UNCHATTERED':
			return {
				...state,
				fifa: false,
				goa: false,
				gta: !action.payload,
				head: true,
				standings_check: true,
			};
		case 'FORTNITE':
			return {
				...state,
				fifa: false,
				goa: false,
				gta: !action.payload,
				head: true,
				standings_check: true,
			};
		case 'CALL_OF_DUTY':
			return {
				...state,
				fifa: false,
				goa: false,
				gta: !action.payload,
				head: true,
				standings_check: true,
			};
		case 'NONE':
			return {
				...state,
				fifa: false,
				goa: false,
				gta: false,
				standings_check: true,
			};
		case 'MODES':
			return {
				...state,
				modes: !action.payload,
			};

		// Get Gamers reducer

		case 'LOAD_GAMES':
			return {
				...state,
				allgames: action.payload,
			};
		case 'SETUSER':
			return {
				...state,
				currentUser: action.payload,
			};

		case 'ERROR_GAMES':
			return {
				...state,
				loading: false,
			};

		case 'ERROR':
			return {
				...state,
				date_search: false,
				search: false,
			};
		case 'Loading':
			return {
				...state,
				loading: !state.loading,
			};
		case 'STANDINGS':
			return {
				...state,
				team_standings: action.payload,
			};
		case 'FIXTURES':
			return {
				...state,
				team_fixtures: action.payload,
			};

		default:
			return {
				...state,
			};
	}
};
