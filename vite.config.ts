import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	define: {
		global: 'window'
	},
	plugins: [sveltekit()]
};

export default config;
