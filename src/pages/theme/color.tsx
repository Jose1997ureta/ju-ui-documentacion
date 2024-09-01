import { CodeShared } from "../../shared/components";
import { Layout } from "../../shared/layout/layout";
import { Chip } from "@jose-ureta/ju-ui";

export const ColorPage = () => {
	return (
		<Layout>
			<h1 className="text-4xl mb-4 text-text-900" id="import">
				Colors
			</h1>

			<div className="mt-8">
				<p className="text-text-800">
					La libreria permite personalizar los componentes con esttos colores
				</p>

				<div className="flex items-center gap-x-1 mt-1">
					<Chip color="white">Primary</Chip>
					<Chip color="white">Secondary</Chip>
					<Chip color="white">Neutral</Chip>
					<Chip color="white">Success</Chip>
					<Chip color="white">Warning</Chip>
					<Chip color="white">Danger</Chip>
				</div>
			</div>

			<h3 className="text-xl mt-4 text-text-900">Colores por Defecto:</h3>

			<p className="text-text-800 text-sm mt-2">tailwind.config.js</p>

			<CodeShared>{`export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				inputBase: "",
				inputError: "",
				base: "",
			},

			colors: {
				white: "",
				primary: {
					50: "",
					100: "",
					500: "",
					700: "",
					800: "",
					900: "",
				},
				secondary: {
					50: "",
					100: "",
					500: "",
					700: "",
					800: "",
					900: "",
				},
				neutral: {
					50: "",
					100: "",
					300: "",
					500: "",
					700: "",
					800: "",
					900: "",
				},
				success: {
					50: "",
					100: "",
					500: "",
					700: "",
					800: "",
					900: "",
				},
				danger: {
					50: "",
					100: "",
					500: "",
					700: "",
					800: "",
					900: "",
				},
				warning: {
					100: "",
					700: "",
					800: "",
					900: "",
				},
				text: {
					100: "",
					500: "",
					700: "",
					800: "",
					900: "",
				},
			},

			opacity: {
				50: "0.5",
			},
		},
	},
	plugins: [],
};
`}</CodeShared>

			<h3 className="text-xl mt-4 text-text-900">Personalizar Archivo:</h3>

			<CodeShared>{`export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				inputBase: "var(--shadow-inputBase)",
				inputError: "var(--shadow-inputError)",
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
`}</CodeShared>
		</Layout>
	);
};
