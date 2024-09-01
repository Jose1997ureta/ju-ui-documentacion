import { NavLink, useLocation } from "react-router-dom";

const data = [
	{
		id: "guia",
		name: "Documentacion",
		path: "/guia/installation",
	},
	{
		id: "component",
		name: "Componentes",
		path: "/component/accordion",
	},
];

export const Header = () => {
	const location = useLocation();

	const hashPath = (href: string) => {
		const active =
			(location.pathname === "/" && href === "/") ||
			location.pathname === href ||
			location.pathname.startsWith("/" + href + "/");

		return active;
	};

	return (
		<header
			className="sticky top-0 z-20 h-[60px] bg-transparent shadow-sm flex items-center justify-between gap-x-4 px-4"
			style={{ backdropFilter: "blur(10px)" }}
		>
			<div className="bg-primary-700 rounded-md p-2">
				<p className="text-white font-medium">J.U</p>
			</div>
			<ul className="flex items-center gap-x-4">
				{data.map((el) => (
					<li key={el.id}>
						<NavLink
							to={el.path}
							className={
								hashPath(el.id)
									? "text-primary-700 font-medium"
									: "text-text-800"
							}
						>
							{el.name}
						</NavLink>
					</li>
				))}
			</ul>
		</header>
	);
};
