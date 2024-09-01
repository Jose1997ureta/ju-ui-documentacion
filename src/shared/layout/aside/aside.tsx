import { AsideMenu } from "./components/aside-menu";
import { AsideDataMenuProps } from "./interface/aside.interface";

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
			/*  */
		],
	},
] as AsideDataMenuProps[];

export const Aside = () => {
	return (
		<aside className="relative z-10">
			<div
				className="fixed w-[250px]"
				style={{
					height: "calc(100vh - 92px)",
				}}
			>
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
