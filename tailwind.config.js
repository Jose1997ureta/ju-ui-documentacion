/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				inputBase: `var(--shadow-inputBase)`,
				inputError: `var(--shadow-inputError)`,
				base: "0px 2px 8px 0px rgba(0, 0, 0, 0.16)",
			},

			colors: {
				white: "var(--colors-white)",
				primary: {
					50: "var(--colors-primary-50)",
					100: "var(--colors-primary-100)",
					500: "var(--colors-primary-500)",
					700: "var(--colors-primary-700)",
					800: "var(--colors-primary-800)",
					900: "var(--colors-primary-900)",
				},
				secondary: {
					50: "var(--colors-secondary-50)",
					100: "var(--colors-secondary-100)",
					500: "var(--colors-secondary-500)",
					700: "var(--colors-secondary-700)",
					800: "var(--colors-secondary-800)",
					900: "var(--colors-secondary-900)",
				},
				neutral: {
					50: "var(--colors-neutral-50)",
					100: "var(--colors-neutral-100)",
					300: "var(--colors-neutral-300)",
					500: "var(--colors-neutral-500)",
					700: "var(--colors-neutral-700)",
					800: "var(--colors-neutral-800)",
					900: "var(--colors-neutral-900)",
				},
				success: {
					50: "var(--colors-success-50)",
					100: "var(--colors-success-100)",
					500: "var(--colors-success-500)",
					700: "var(--colors-success-700)",
					800: "var(--colors-success-800)",
					900: "var(--colors-success-900)",
				},
				danger: {
					50: "var(--colors-danger-50)",
					100: "var(--colors-danger-100)",
					500: "var(--colors-danger-500)",
					700: "var(--colors-danger-700)",
					800: "var(--colors-danger-800)",
					900: "var(--colors-danger-900)",
				},
				warning: {
					100: "var(--colors-warning-100)",
					700: "var(--colors-warning-700)",
					800: "var(--colors-warning-800)",
					900: "var(--colors-warning-900)",
				},
				text: {
					100: "var(--colors-text-100)",
					500: "var(--colors-text-500)",
					700: "var(--colors-text-700)",
					800: "var(--colors-text-800)",
					900: "var(--colors-text-900)",
				},
			},

			opacity: {
				50: "0.5",
			},
		},
	},
	plugins: [],
};
