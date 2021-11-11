import { litePalette, darkPalette } from './pallette';
import options from './themeOptions';

// Create a theme instance:
const darkTheme = {
	...options,
	palette: darkPalette,
};

const lightTheme = {
	...options,
	palette: litePalette,
};

export { lightTheme, darkTheme };
