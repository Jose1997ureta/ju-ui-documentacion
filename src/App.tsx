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

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/input" element={<InputPage />} />
				<Route path="/textarea" element={<TextAreaPage />} />
				<Route path="/button" element={<ButtonPage />} />
				<Route path="/button-icon" element={<ButtonIconPage />} />
				<Route path="/chip" element={<ChipPage />} />
				<Route path="/checkbox" element={<CheckBoxPage />} />
				<Route path="/radio" element={<RadioPage />} />
				<Route path="/toggle" element={<TogglePage />} />
				<Route path="/avatar" element={<AvatarPage />} />
				<Route path="/accordion" element={<AccordionPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
