import { remSize } from '../constants/remSize';
import { TPixelValue } from '../types';

const convert2EmOrRem = (
	size: number,
	pixels: TPixelValue[],
	unit: 'em' | 'rem',
	joiner = ' ',
): string => {
	const result = pixels
		.map((px) => {
			if (typeof px === 'string') {
				return px;
			}

			if (px === 0) {
				return '0';
			}

			return (Number(px) / Number(size)).toFixed(5) + unit;
		})
		.join(joiner);

	return result;
};

/**
 * @example
 *  cssRem(16) => '1rem'
 *  cssRem(16, 24, 32, 48) => '1rem 1.5rem 2rem 3rem'
 */
export const cssRem = (...pixels: TPixelValue[]): string =>
	convert2EmOrRem(remSize, pixels, 'rem', ' ');

/**
 * @example
 *  cssRemS(16) => '1rem'
 *  cssRemS(16, 24, 32, 48) => '1rem, 1.5rem, 2rem, 3rem'
 */
export const cssRemS = (...pixels: TPixelValue[]): string =>
	convert2EmOrRem(remSize, pixels, 'rem', ', ');

/**
 * @example
 *  cssEm(16, 24) => '1.5em'
 *  cssEm(20, 30, 10, 45) => '1.5em 0.5em 2.25em'
 */
export const cssEm = (emSize: number, ...pixels: TPixelValue[]): string =>
	convert2EmOrRem(emSize, pixels, 'em', ' ');

/**
 * @example
 *  cssEmS(16, 24) => '1.5em'
 *  cssEmS(20, 30, 10, 45) => '1.5em, 0.5em, 2.25em'
 */
export const cssEmS = (emSize: number, ...pixels: TPixelValue[]): string =>
	convert2EmOrRem(emSize, pixels, 'em', ', ');
