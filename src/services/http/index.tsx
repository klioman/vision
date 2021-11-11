import axios, { AxiosInstance } from 'axios';
import { WEB_API_URL } from 'services/env';
import onError from './interceptor/onError';
import onSuccess from './interceptor/onSuccess';

// ==========================================:
const http: AxiosInstance = axios.create({
	baseURL: WEB_API_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

http.interceptors.request.use(onSuccess);
http.interceptors.response.use((response) => response, onError);

export { http };
