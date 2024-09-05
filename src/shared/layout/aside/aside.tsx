import { useEffect, useState } from "react";
import { AsideMenu } from "./components/aside-menu";
import { AsideDataMenuProps } from "./interface/aside.interface";
import { useMitt } from "../../hooks/use-mitt";
import { useScreen } from "../../hooks/use-screen";

const dataMenu = [
	{
		id: "guide",
		name: "Guia",
		menu: [
			{
				id: "installation",
				path: "/guia/installation",
				name: "Instalacion",
			},
		],
	},
	{
		id: "Customization",
		name: "Personalizar",
		menu: [
			{
				id: "color",
				path: "/theme/color",
				name: "Colors",
			},
			{
				id: "custom-vars",
				path: "/theme/custom-vars",
				name: "Personalizar Variables",
			},
		],
	},
	{
		id: "component",
		name: "Componentes",
		menu: [
			{
				id: "accordion",
				path: "/component/accordion",
				name: "Accordion",
			},
			{
				id: "avatar",
				path: "/component/avatar",
				name: "Avatar",
			},
			{
				id: "button",
				path: "/component/button",
				name: "Button",
			},
			{
				id: "button-icon",
				path: "/component/button-icon",
				name: "Button Icon",
			},
			{
				id: "checkbox",
				path: "/component/checkbox",
				name: "CheckBox",
			},
			{
				id: "chip",
				path: "/component/chip",
				name: "Chip",
			},
			{
				id: "input",
				path: "/component/input",
				name: "Input",
			},
			{
				id: "radio",
				path: "/component/radio",
				name: "Radio",
			},
			{
				id: "textarea",
				path: "/component/textarea",
				name: "TextArea",
			},
			{
				id: "toggle",
				path: "/component/toggle",
				name: "Toggle",
			},
			{
				id: "confirmation",
				path: "/component/overlay/confirmation",
				name: "Confirmacion",
			},
			/*  */
		],
	},
] as AsideDataMenuProps[];

export const Aside = () => {
	const { emitter } = useMitt();
	const [isShow, setIsShow] = useState<boolean>(false);
	const { isResponsive } = useScreen();

	useEffect(() => {
		const handleShow = (state: boolean) => {
			setIsShow(state);
		};

		emitter.on("isMenu", handleShow);

		return () => {
			emitter.off("isMenu", handleShow);
		};
	}, [emitter]);

	useEffect(() => {
		if (isResponsive) setIsShow(false);
		else setIsShow(true);
	}, [isResponsive]);

	return (
		<aside
			className={`max-md:fixed relative z-10 max-md:top-[60px] max-md:left-0 max-md:w-full ${
				isShow ? "block" : "hidden"
			}`}
			id="aside"
		>
			<div className="md:fixed md:w-[250px] bg-white md:h-[calc(100vh_-_92px)] h-[calc(100vh_-_60px)]">
				<div className="relative overflow-hidden h-full w-full">
					<div className="h-full overflow-y-auto">
						{dataMenu.map((el) => (
							<AsideMenu item={el} key={el.id} />
						))}
					</div>
				</div>
			</div>
		</aside>
	);
};
