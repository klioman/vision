/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { put, takeEvery } from 'redux-saga/effects';
import { authInitState, loginRequest } from './reducer';

// =============================================================:
function* loginRequestWorker(action: PayloadAction<any>) {
	// const { payload } = action;

	try {
		yield put(showLoading());
		// const response:  = yield call(api.auth.login, payload);

		// yield put(loginSuccess(response));
	} catch (error) {
		yield put(authInitState());
	} finally {
		yield put(hideLoading());
	}
}

// =============================================================:
export function* authSaga() {
	yield takeEvery(loginRequest.type, loginRequestWorker);
}
