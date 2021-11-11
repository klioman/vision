import { FC } from 'react';
import { Typography } from '@mui/material';
import TestComponent from 'components/TestComponent';
import Auth from 'layouts/Auth';

// ==========================================:
const Login: FC = () => {
	return (
		<Auth pageTitle="Login">
			<Typography variant="h1">Login page</Typography>
			<TestComponent />
		</Auth>
	);
};

export default Login;
