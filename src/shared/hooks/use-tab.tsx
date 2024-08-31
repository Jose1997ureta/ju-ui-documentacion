import { useState } from "react";
import { keyCurrentProps } from "../interface/tab.interface";

export const useTab = () => {
	const [keyCurrent, setKeyCurrent] = useState<keyCurrentProps>("preview");

	const handleChangeTab = (key: keyCurrentProps) => {
		setKeyCurrent(key);
	};

	return {
		keyCurrent,
		handleChangeTab,
	};
};
