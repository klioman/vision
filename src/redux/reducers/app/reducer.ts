import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAppStore, IMobileMenu } from './types';

// ==========================================:
const initialState: IAppStore = {
	mobileMenu: false,
	darkMode: false,
	lang: 'en',
};

// ==========================================:
const app = createSlice({
	name: '@@app',
	initialState,
	reducers: {
		mobileMenu: (state, action: PayloadAction<IMobileMenu>) => {
			const { payload } = action;
			const mobileMenuState = state;

			mobileMenuState.mobileMenu = payload.open;
		},
		setThemeMode: (state) => {
			const themeModeState = state;

			themeModeState.darkMode = !themeModeState.darkMode;
		},
	},
});

export default app.reducer;
export const { mobileMenu, setThemeMode } = app.actions;
