// ==========================================:
export interface IAuthApi {
	login: (payload: any) => Promise<any>;
	refreshToken: (payload: any) => Promise<any>;
}
