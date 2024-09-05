import { Aside } from "./aside/aside";
import { Header } from "./header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="grid min-h-screen" style={{ gridTemplateRows: "60px 1fr" }}>
			<Header />
			<div className="md:px-6 md:max-w-7xl w-full mx-auto relative">
				<div className="grid py-8 grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr_200px]">
					<Aside />
					<div className="px-5 md:px-10 overflow-hidden">{children}</div>
					<div className=" bg-white"></div>
				</div>
			</div>
		</div>
	);
};
