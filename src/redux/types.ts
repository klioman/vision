import { RouterState as IRouterState } from 'connected-react-router';
import { IAppStore } from 'redux/reducers/app/types';
import { IAuthStore } from 'redux/reducers/auth/types';

// ==========================================:
export interface IStoreState {
	router: IRouterState;
	app: IAppStore;
	auth: IAuthStore;
}
