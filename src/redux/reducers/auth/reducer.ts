/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthStore } from './types';

// ==========================================:
export const initialState: IAuthStore = {
	accessToken: null,
	refreshToken: null,
	isAuthenticated: false,
	loginLoader: false,
};

// ==========================================:
const auth = createSlice({
	name: '@@auth',
	initialState,
	reducers: {
		loginRequest: (state, action: PayloadAction<any>) => {
			const loginRequestState = state;

			loginRequestState.loginLoader = true;
		},
		loginSuccess: (state, action: PayloadAction<any>) => {
			const { payload } = action;
			const loginState = state;

			loginState.isAuthenticated = true;
			loginState.loginLoader = false;
			loginState.accessToken = payload.access_token;
			loginState.refreshToken = payload.refresh_token;
		},
		refreshTokenSuccess: (state, action: PayloadAction<any>) => {
			const { payload } = action;
			const refreshTokenState = state;

			refreshTokenState.accessToken = payload.access_token;
			refreshTokenState.refreshToken = payload.refresh_token;
		},
		authInitState: () => initialState,
	},
});

export default auth.reducer;
export const { loginRequest, loginSuccess, refreshTokenSuccess, authInitState } = auth.actions;
