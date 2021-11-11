import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from 'redux/types';
import { IAppStore } from './types';

// ==========================================:
const getAppState = (state: IStoreState): IAppStore => state.app;
export const getApp = createSelector([getAppState], (app: IAppStore) => app);

// ==========================================:
export const getCurrentLang = createSelector([getApp], (app: IAppStore): string => app.lang);

// ==========================================:
export const getThemeType = createSelector([getApp], (app: IAppStore): boolean => app.darkMode);
