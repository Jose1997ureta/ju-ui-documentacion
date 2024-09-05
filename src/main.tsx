import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import "onroadlibrary/dist/style.css"
import "@jose-ureta/ju-ui/dist/style.css";
import "./index.css";
import { MittProvider } from "./shared/context/mitt.context.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<MittProvider>
			<App />
		</MittProvider>
	</StrictMode>
);
