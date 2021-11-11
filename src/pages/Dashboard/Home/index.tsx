import { FC } from 'react';
import { Typography } from '@mui/material';
import Dashboard from 'layouts/Dashboard';
import TestComponent from 'components/TestComponent';

// ==========================================:
const Home: FC = () => {
	return (
		<Dashboard>
			<Typography variant="h1">Home</Typography>
			<TestComponent />
		</Dashboard>
	);
};

export default Home;
