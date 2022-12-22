import { Satellite } from '@mui/icons-material';

export const mainreducer = (state, action) => {
	switch (action.type) {
		case 'GETUSER': {
			return {
				...state,
				currentUser: action.payload,
			};
		}
		case 'UPDATE_AUTH':
			return {
				...state,
				auth: !action.payload,
				loading: !action.payload.loading,
				currentuser: action.payload.currentuser,
				modalsuccess: action.payload.modalsuccess,
				ismodal: !action.payload,
			};
		case 'LOGIN': {
			return {
				...state,
				modalsuccess: action.payload.modalsuccess,
				ismodal: !action.payload,
			};
		}
		case 'EMPTY': {
			return {
				...state,
				errorm: true,
				mymess: action.message,
			};
		}
		case 'UPDATE_USER': {
			return {
				...state,
				currentuser: action.payload,
			};
		}
		case 'LOGIN_ERROR': {
			return {
				...state,
				modalerror: 'Failed to Login',
				loading: !action.payload.loading,
				ismodal: !action.payload,
			};
		}
		case 'UPDATE_THEME':
			return {
				...state,
				istheme: !action.payload,
			};
		case 'ERROR':
			return {
				modalerror: action.payload.modalerror,
				ismodal: !action.payload,
			};
		case 'INPUT_ERROR':
			return {
				modalerror: action.payload.modalerror,
				ismodal: !action.payload,
			};
		case 'SET_DESC':
			return {
				...state,
				descr: !action.payload,
			};
		case 'CANCEL':
			return {
				error: '',
				ismodal: !action.payload,
			};

		case 'SET_FEED':
			return {
				...state,
				data_feed: action.payload,
			};
		case 'LOGOUT_SUCCESS':
			return {
				...state,
				modelsuccess: action.payload.modelsuccess,
			};
		case 'LOGOUT_ERROR':
			return {
				...state,
				modelerror: action.payload.modelerror,
			};
		case 'CONTACT':
			return {
				...state,
				contact: !action.payload,
			};
		case 'WRONG_PASSWORD':
			return {
				...state,
				ismodal: true,
				modalcontent: 'Both passwords should match',
			};
		case 'NO_DATA':
			return {
				...state,
				ismodal: true,
				modalcontent: 'Cannot Submit Empty Inputs',
			};
		case 'CLOSEMODAL':
			return {
				...state,
				ismodal: false,
			};
		case 'UPDATE_LOADING':
			return {
				...state,
				disabled: !state.disabled,
				loading: true,
			};
		case 'UPDATE':
			return {
				...state,
				loading: false,
				success: !action.payload.success,
				ismodal: !action.payload.ismodal,
				modalcontent: action.payload.modalcontent,

				updated_user: action.payload.updated_user,
			};
		case 'UPDATE_ERROR':
			return {
				...state,
				ismodal: !action.ismodal,
				modalcontent: action.payload,
				loading: true,
			};
		case 'FILL_USER':
			return {
				...state,
				userInfo: action.payload,
			};
		case 'DELETE_USER':
			return {
				...state,
				ismodal: !action.ismodal,
				modalcontent: action.payload.modalcontent,
				loader: true,
			};
		case 'DELETE_ERROR':
			return {
				...state,
				ismodal: !action.ismodal,
				modalcontent: action.payload,
				loader: true,
			};
		case 'DELETE_WAIT':
			return {
				...state,
				loader: true,
			};

		case 'OVERLAY':
			return {
				...state,
				overlay: !state.overlay,
			};
		case 'OVERLAY1':
			return {
				...state,
				overlay: true,
			};
		case 'MENU':
			return {
				...state,
				auth: true,
			};
		case 'PLAN':
			return {
				...state,
				plan: !state.plan,
			};
		case 'PLAN_ERROR':
			return {
				...state,
				loading: true,
			};
		case 'FREE':
			return {
				...state,
				free: !state.free,
			};
		case 'AMATEUR':
			return {
				...state,
				amateur: !state.amateur,
			};
		case 'WORLD':
			return {
				...state,
				world: !state.world,
			};
		case 'PREMIUM':
			return {
				...state,
				premium: !state.premium,
			};

		default:
			return { ...state };
	}
};
