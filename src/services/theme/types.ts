// Theme spacing list:
export enum SpacingList {
	none,
	xxs,
	xs,
	sm,
	md,
	df,
	lg,
	xl,
	xxl,
	hg,
}

// Theme breakpoints list:
export enum BreakpointsList {
	// 414px
	xs = 'xs',
	// 640px
	sm = 'sm',
	// 768px
	md = 'md',
	// 1080px
	lg = 'lg',
	// 1280px
	xl = 'xl',
}

export type TPixelValue = number | 'auto' | 'inherit' | 'initial' | 'revert' | 'unset';
