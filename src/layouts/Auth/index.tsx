import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { APP_NAME } from 'services/env';
import { IAuthLayout } from './types';

// ==========================================:
const Auth: FC<IAuthLayout> = ({ children, pageTitle }) => {
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

export default Auth;
