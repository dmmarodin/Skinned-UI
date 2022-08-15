const { typescript: svelteTS } = require('svelte-preprocess');
const tsconfigPaths = require('vite-tsconfig-paths');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
		'storybook-dark-mode'
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	async viteFinal(config) {
		return {
			...config,
			plugins: [...config.plugins, tsconfigPaths.default()]
		};
	},
	svelteOptions: {
		preprocess: [svelteTS()]
	},
	features: {
		storyStoreV7: false
	}
};
