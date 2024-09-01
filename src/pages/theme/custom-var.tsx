import { CodeShared } from "../../shared/components";
import { Layout } from "../../shared/layout/layout";
import { Chip } from "@jose-ureta/ju-ui";

export const CustomVarsPage = () => {
	return (
		<Layout>
			<h1 className="text-4xl mb-4 text-text-900" id="import">
				Personalizar Variables
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

			<h3 className="text-xl mt-4 text-text-900">Asignar valores:</h3>

			<p className="text-text-800 text-sm mt-2">index.css</p>

			<CodeShared language="css">{`@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
	--colors-white: #fff;
	--colors-primary-50: #ebf3ff;
	--colors-primary-100: #d4e3ff;
	--colors-primary-500: #b1d4fe;
	--colors-primary-700: #0048d0;
	--colors-primary-800: #0039a8;
	--colors-primary-900: #002c7d;
	--colors-secondary-50: #fef8f5;
	--colors-secondary-100: #fff0eb;
	--colors-secondary-500: #ffc296;
	--colors-secondary-700: #ff6b00;
	--colors-secondary-800: #e45200;
	--colors-secondary-900: #ce3100;
	--colors-neutral-50: #f8f9fc;
	--colors-neutral-100: #f8f9fc;
	--colors-neutral-200: #f1f3f9;
	--colors-neutral-300: #e1e6ef;
	--colors-neutral-500: #3f444d;
	--colors-neutral-700: #23272f;
	--colors-neutral-800: #1b1f27;
	--colors-neutral-900: #0a0d14;
	--colors-success-50: #f5fff8;
	--colors-success-100: #daf5e2;
	--colors-success-500: #b4e4ca;
	--colors-success-700: #00ab6d;
	--colors-success-800: #008143;
	--colors-success-900: #005641;
	--colors-danger-50: #ffe9eb;
	--colors-danger-100: #ffe9eb;
	--colors-danger-500: #ffc7c7;
	--colors-danger-700: #e02d3c;
	--colors-danger-800: #ba2532;
	--colors-danger-900: #981b25;
	--colors-warning-100: #fff8eb;
	--colors-warning-700: #c38343;
	--colors-warning-800: #a65b0f;
	--colors-warning-900: #7f4205;
	--colors-text-100: #f1f3f4;
	--colors-text-500: #d9dcdd;
	--colors-text-700: #aaadb2;
	--colors-text-800: #515865;
	--colors-text-900: #1d2433;

	--shadow-inputBase: inset 0 0 0 0.3px var(--colors-primary-700),
		0 0 0 4px var(--colors-primary-100);
	--shadow-inputError: inset 0 0 0 0.3px var(--colors-danger-700),
		0 0 0 4px var(--colors-danger-100);
}
`}</CodeShared>
		</Layout>
	);
};
