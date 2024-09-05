import { useCallback, useEffect, useState } from "react";

export const useScreen = () => {
	const [isResponsive, setIsResponsive] = useState<boolean>(false);

	const handleResize = useCallback(() => {
		const width = window.innerWidth;

		if (width < 768) {
			setIsResponsive(true);
			// document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
		} else {
			setIsResponsive(false);
			// document
			// 	.getElementsByTagName("body")[0]
			// 	.classList.remove("overflow-hidden");
		}
	}, []);

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	return {
		isResponsive,
	};
};
