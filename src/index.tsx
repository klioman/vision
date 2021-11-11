import { ComponentType } from 'react';
import ReactDOM from 'react-dom';
import LoadingBar from 'react-redux-loading-bar';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter as ConnectedRouterProvider } from 'connected-react-router';
import { persistor, store } from 'redux/store';
import { history } from 'routes/history';
import App from 'components/App';

import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root') as HTMLElement;

const render = (Component: ComponentType, root: HTMLElement, done?: () => void) => {
	ReactDOM.render(
		<ReduxProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ConnectedRouterProvider history={history}>
					<LoadingBar className="loading-bar" />
					<Component />
				</ConnectedRouterProvider>
			</PersistGate>
		</ReduxProvider>,
		root,
		done,
	);
};

render(App, rootElement);

reportWebVitals();
