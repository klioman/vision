module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.svg$': 'jest-svg-transformer',
	},
	moduleNameMapper: {
		'\\.(css|scss|less)$': 'identity-obj-proxy',
	},
	moduleDirectories: ['node_modules', 'src'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node'],
	testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
};
