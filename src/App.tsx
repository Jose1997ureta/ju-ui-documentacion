import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InputPage } from "./pages/input/input";
import { TextAreaPage } from "./pages/textarea/textarea";
import { ButtonPage } from "./pages/button/button";
import { ButtonIconPage } from "./pages/button-icon/button-icon";
import { ChipPage } from "./pages/chip/chip";
import { CheckBoxPage } from "./pages/checkbox/checkbox";
import { RadioPage } from "./pages/radio/radio";
import { TogglePage } from "./pages/toggle/toggle";
import { AvatarPage } from "./pages/avatar/avatar";
import { AccordionPage } from "./pages/accordion/accordion";
import { GuiaPage } from "./pages/guia/guia";
import { ColorPage } from "./pages/theme/color";
import { CustomVarsPage } from "./pages/theme/custom-var";
import { ConfirmationPage } from "./pages/overlay/confirmation/confirmation";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<GuiaPage />} />
				<Route path="/component/input" element={<InputPage />} />
				<Route path="/component/textarea" element={<TextAreaPage />} />
				<Route path="/component/button" element={<ButtonPage />} />
				<Route path="/component/button-icon" element={<ButtonIconPage />} />
				<Route path="/component/chip" element={<ChipPage />} />
				<Route path="/component/checkbox" element={<CheckBoxPage />} />
				<Route path="/component/radio" element={<RadioPage />} />
				<Route path="/component/toggle" element={<TogglePage />} />
				<Route path="/component/avatar" element={<AvatarPage />} />
				<Route path="/component/accordion" element={<AccordionPage />} />
				<Route path="/guia/installation" element={<GuiaPage />} />
				<Route path="/theme/color" element={<ColorPage />} />
				<Route path="/theme/custom-vars" element={<CustomVarsPage />} />
				<Route
					path="/component/overlay/confirmation"
					element={<ConfirmationPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
