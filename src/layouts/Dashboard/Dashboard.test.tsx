import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'redux/store';
import Dashboard from './index';

// ================================================:
describe('Dashboard layout component:', () => {
	it('Dashboard layout component must be render', () => {
		const { container } = render(
			<ReduxProvider store={store}>
				<BrowserRouter>
					<Dashboard />
				</BrowserRouter>
			</ReduxProvider>,
		);
		expect(container).toBeInTheDocument();
	});
});
