import { endpoint } from 'services/endpoint';
import { http } from 'services/http';
import { IAuthApi } from './types';

// ==========================================:
export const auth: IAuthApi = {
	login: (payload) =>
		http.post<any>(endpoint.auth.LOGIN, payload).then((response) => response.data),

	refreshToken: (payload) =>
		http.post<any>(endpoint.auth.REFRESH_TOKEN, payload).then((response) => response.data),
};
