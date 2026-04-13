/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				soft: '0 8px 20px -14px rgba(15, 23, 42, 0.2)',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0.35 },
					'100%': { opacity: 1 },
				},
				slideUp: {
					'0%': { opacity: 0.35, transform: 'translateY(8px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
			},
			animation: {
				'fade-in': 'fadeIn .8s ease-out both',
				'slide-up': 'slideUp .8s ease-out both',
			},
		},
	},
	plugins: [],
};
