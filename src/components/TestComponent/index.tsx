import { FC } from 'react';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setThemeMode } from 'redux/reducers/app/reducer';

// ==========================================:
const TestComponent: FC = () => {
	const dispatch = useDispatch();

	const handleDarkMode = (): void => {
		dispatch(setThemeMode());
	};

	return (
		<>
			<Typography variant="h2">Test Component</Typography>
			<Typography variant="h3">Subtitle</Typography>
			<Button onClick={handleDarkMode} variant="contained">
				Dark mode
			</Button>
		</>
	);
};

export default TestComponent;
