import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { History } from 'history';

import app from 'redux/reducers/app/reducer';
import auth from 'redux/reducers/auth/reducer';

// ==========================================:
const createRootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		loadingBar: loadingBarReducer,
		app,
		auth,
	});

export default createRootReducer;
