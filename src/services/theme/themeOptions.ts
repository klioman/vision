import { ThemeOptions } from '@mui/material';
import { cssRem } from './utils';

const options: ThemeOptions = {
	spacing: (factor: number) => {
		// prettier-ignore
		return [
			0,           // SpacingList.NONE
			cssRem(2),   // SpacingList.XXS
			cssRem(4),   // SpacingList.XS
			cssRem(8),   // SpacingList.SM
			cssRem(12),  // SpacingList.MD
			cssRem(16),  // SpacingList.DF
			cssRem(24),  // SpacingList.LG
			cssRem(32),  // SpacingList.XL
			cssRem(48),  // SpacingList.XXL
			cssRem(80)   // SpacingList.HG
		][factor];
	},
	breakpoints: {
		// prettier-ignore
		values: {
			xs: 414,  // BreakpointsList.xs
			sm: 640,  // BreakpointsList.sm
			md: 768,  // BreakpointsList.md
			lg: 1080, // BreakpointsList.lg
			xl: 1280, // BreakpointsList.xl
		},
	},
	shadows: [
		'none',
		'0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)',
		'0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)',
	],
	typography: {
		fontFamily: 'Roboto, HelveticaNeueCyr, Helvetica, Arial, sans-serif',
		h1: {
			fontWeight: 500,
			fontSize: 35,
			letterSpacing: '-0.24px',
			marginBottom: cssRem(15),
		},
		h2: {
			fontWeight: 500,
			fontSize: 29,
			letterSpacing: '-0.24px',
			marginBottom: cssRem(15),
		},
		h3: {
			fontWeight: 500,
			fontSize: 24,
			letterSpacing: '-0.06px',
			marginBottom: cssRem(15),
		},
		h4: {
			fontWeight: 500,
			fontSize: 20,
			letterSpacing: '-0.06px',
			marginBottom: cssRem(10),
		},
		h5: {
			fontWeight: 500,
			fontSize: 16,
			letterSpacing: '-0.05px',
			marginBottom: cssRem(10),
		},
		h6: {
			fontWeight: 500,
			fontSize: 14,
			letterSpacing: '-0.05px',
			marginBottom: cssRem(10),
		},
		overline: {
			fontWeight: 500,
		},
	},
};

export default options;
