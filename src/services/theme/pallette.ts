import { PaletteOptions } from '@mui/material';
import { red } from '@mui/material/colors';

// ---------------------------------------------------------:
// See:
// https://material-ui.com/customization/palette/
// https://material-ui.com/customization/color/#color-tool
// ---------------------------------------------------------:

const darkPalette: PaletteOptions = {
	mode: 'dark',
	primary: {
		light: '#ddd',
		main: '#2836a4',
		dark: '#002884',
		contrastText: '#fff',
	},
	secondary: {
		light: '#ff7961',
		main: '#f44336',
		dark: '#ba000d',
		contrastText: '#000',
	},
	error: {
		main: red.A400,
	},
};

const litePalette: PaletteOptions = {
	mode: 'light',
	primary: {
		light: '#000',
		main: '#5664d2',
		dark: '#000',
		contrastText: '#fff',
	},
	secondary: {
		light: '#000',
		main: '#000',
		dark: '#000',
		contrastText: '#000',
	},
	error: {
		main: red.A400,
	},
};

export { litePalette, darkPalette };
