import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';
export const login = createAsyncThunk(
	'auth/login',
	async (
		{ formval, navigate, toast, setMainContext, path_ },
		{ rejectWithValue },
	) => {
		try {
			const response = await api.signin(formval);
			toast.success('Login Successfully');
			navigate('/', { replace: true });
			setMainContext({ type: 'MENU' });
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);
export const googleSignin = createAsyncThunk(
	'auth/googleSignin',
	async ({ result, navigate, toast }, { rejectWithValue }) => {
		try {
			const response = await api.googleSignin(result);
			toast.success('Google Sign in Successfully');
			navigate('/');
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);
export const register = createAsyncThunk(
	'auth/register',
	async (
		{ formval, navigate, toast, setMainContext },
		{ rejectWithValue },
	) => {
		try {
			const response = await api.signup(formval);
			toast.success('Registered Successfully');
			navigate('/package-plan');
			setMainContext({ type: 'MENU' });
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);
const authSlice = createSlice({
	name: 'auth',
	initialState: { user: null, error: '', loading: false },
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setLogout: (state, action) => {
			localStorage.clear();
			state.user = null;
		},
	},
	extraReducers: {
		[login.pending]: (state, action) => {
			state.loading = true;
		},
		[login.fulfilled]: (state, action) => {
			state.loading = false;
			localStorage.setItem(
				'profile',
				JSON.stringify({ ...action.payload }),
			);
			state.user = action.payload;
		},
		[login.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload?.message;
		},
		[register.pending]: (state, action) => {
			state.loading = true;
		},
		[register.fulfilled]: (state, action) => {
			state.loading = false;
			localStorage.setItem(
				'profile',
				JSON.stringify({ ...action.payload }),
			);
			state.user = action.payload;
		},
		[register.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
		[googleSignin.pending]: (state, action) => {
			state.loading = true;
		},
		[googleSignin.fulfilled]: (state, action) => {
			state.loading = false;
			localStorage.setItem(
				'profile',
				JSON.stringify({ ...action.payload }),
			);
			state.user = action.payload;
		},
		[googleSignin.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
	},
});
export default authSlice.reducer;
export const { setUser, setLogout } = authSlice.actions;
