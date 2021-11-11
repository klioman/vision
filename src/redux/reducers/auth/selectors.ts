import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from 'redux/types';
import { IAuthStore } from 'redux/reducers/auth/types';

// ==========================================:
const getAuthState = (state: IStoreState): IAuthStore => state.auth;
export const getAuth = createSelector([getAuthState], (auth: IAuthStore) => auth);

// ====================================================:
export const getAuthIsAuthenticated = createSelector(
	[getAuth],
	(auth: IAuthStore): boolean => !!(auth.isAuthenticated && auth.accessToken),
);

// ====================================================:
export const getAuthIsNotAuthenticated = createSelector(
	[getAuth],
	(auth: IAuthStore): boolean => !auth.isAuthenticated && !auth.accessToken,
);

// ====================================================:
export const getAuthTokenRefresh = createSelector(
	[getAuth],
	(auth: IAuthStore): string | null => auth.refreshToken,
);
