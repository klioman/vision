import { enUS, ruRU, ukUA } from '@mui/material/locale';

export const appLocale = (lang: string | undefined) => {
	switch (lang) {
		case 'ua':
			return ukUA;

		case 'en':
			return enUS;

		case 'ru':
			return ruRU;

		default:
			return ukUA;
	}
};
