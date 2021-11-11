import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledEngineProvider, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { getCurrentLang, getThemeType } from 'redux/reducers/app/selectors';
import routesList from 'routes/routesList';
import { darkTheme, lightTheme } from 'services/theme';
import { appLocale } from 'services/theme/utils';

// ==========================================:
const App: FC = () => {
	const [appDarkMode, setAppDarkMode] = useState(false);

	const themeType = useSelector(getThemeType);
	const currentLang = useSelector(getCurrentLang);

	const appLang = appLocale(currentLang);

	const appTheme = appDarkMode ? darkTheme : lightTheme;
	const themeWrapper = createTheme(appTheme, appLang);

	useEffect(() => {
		setAppDarkMode(themeType);
	}, [themeType]);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={themeWrapper}>
				<CssBaseline />
				<BrowserRouter>
					<Switch>
						{routesList?.map((route) => (
							<Route key={route.path} exact path={route.path} component={route.component} />
						))}
						<Redirect to="/" />
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default App;
