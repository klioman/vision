export interface IAuthStore {
	accessToken: string | null;
	refreshToken: string | null;
	isAuthenticated: boolean;
	loginLoader: boolean;
}
