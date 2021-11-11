import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { APP_NAME } from 'services/env';
import { IDashboardLayout } from './types';

// ==========================================:
const Dashboard: FC<IDashboardLayout> = ({ children, pageTitle }) => {
	const pageTitleText = pageTitle ? `| ${pageTitle}` : '';

	return (
		<>
			<Helmet>
				<title>{`${String(APP_NAME)} ${pageTitleText}`}</title>
			</Helmet>
			{children}
		</>
	);
};

export default Dashboard;
