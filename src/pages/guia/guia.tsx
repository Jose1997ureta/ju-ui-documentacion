import { MdKeyboardArrowRight } from "react-icons/md";
import { CodeShared } from "../../shared/components";
import { FiExternalLink } from "react-icons/fi";
import { Layout } from "../../shared/layout/layout";

export const GuiaPage = () => {
	return (
		<Layout>
			<h1 className="text-4xl mb-4 text-text-900" id="import">
				Instalacion
			</h1>

			<div className="mt-8">
				<p className="text-text-800">Requerimientos:</p>

				<ul className="mt-4 space-y-2">
					<li className="flex items-center gap-x-2 cursor-pointer">
						<MdKeyboardArrowRight className="fill-primary-700" />
						<a
							href="https://react.dev/"
							className="text-primary-700 flex items-center gap-x-1"
							target="_blank"
						>
							React 18
							<FiExternalLink />
						</a>
					</li>
					<li className="flex items-center gap-x-2 cursor-pointer">
						<MdKeyboardArrowRight className="fill-primary-700" />
						<a
							href="https://tailwindcss.com/"
							className="text-primary-700 flex items-center gap-x-1"
							target="_blank"
						>
							Tailwind CSS 3.4
							<FiExternalLink />
						</a>
					</li>
				</ul>
			</div>

			<h3 className="text-xl mt-4 text-text-900">Instalar Libreria:</h3>
			<CodeShared language="npm">{`npm i @jose-ureta/ju-ui`}</CodeShared>

			<h3 className="text-xl mt-4 text-text-900">Agregar Css:</h3>
			<p className="text-sm text-text-800 mt-2">
				Para poder acceder a los estilos de los componentes se requerie el
				archivo css de la libreria.
			</p>
			<CodeShared>{`import "@jose-ureta/ju-ui/dist/style.css");`}</CodeShared>

			<p className="text-text-800 text-sm mt-2">main.tsx</p>

			<CodeShared>{`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@jose-ureta/ju-ui/dist/style.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
`}</CodeShared>
		</Layout>
	);
};
