import axios, { AxiosError } from 'axios';
import { authInitState, refreshTokenSuccess } from 'redux/reducers/auth/reducer';
import { getAuthTokenRefresh } from 'redux/reducers/auth/selectors';
import { store } from 'redux/store';
import { api } from 'services/api';
import { http } from 'services/http';
import { IAxiosError, IAxiosRequestConfig, IFailedQueue } from './types';

// ==========================================:
let isRefreshing = false;
let failedQueue: Array<IFailedQueue> = [];

const processQueue = (error: AxiosError | null, token: undefined | string | null) => {
	failedQueue.forEach((prom) => {
		if (error) {
			prom.reject(error);
		} else {
			prom.resolve(token);
		}
	});

	failedQueue = [];
};

const onError = (error: IAxiosError) => {
	const status = error.response ? error.response.status : null;
	const errorResponse: IAxiosRequestConfig = error.config;

	if (status === 401 && !errorResponse._retry) {
		const state = store.getState();

		if (isRefreshing) {
			return new Promise((resolve, reject) => {
				failedQueue.push({ resolve, reject });
			})
				.then((token) => {
					errorResponse.headers = {
						Authorization: `Bearer ${String(token)}
					`,
					};
					return axios(errorResponse);
				})
				.catch((err) => {
					return Promise.reject(err);
				});
		}

		errorResponse._retry = true;
		isRefreshing = true;

		return new Promise((resolve, reject) => {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			api.auth
				.refreshToken({ refresh_token: getAuthTokenRefresh(state) })
				.then((response) => {
					store.dispatch(refreshTokenSuccess(response));
					errorResponse.headers = {
						Authorization: `Bearer ${String(response.access_token)}`,
					};
					errorResponse.baseURL = undefined;
					processQueue(null, response.access_token);
					resolve(http.request(errorResponse));
				})
				.catch((err) => {
					processQueue(err, null);
					store.dispatch(authInitState());
					reject(err);
				})
				.then(() => {
					isRefreshing = false;
				});
		});
	}

	return Promise.reject(error);
};

export default onError;
