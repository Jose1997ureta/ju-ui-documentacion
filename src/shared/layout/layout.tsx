import { Aside } from "./aside/aside";
import { Header } from "./header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="grid min-h-screen" style={{ gridTemplateRows: "60px 1fr" }}>
			<Header />
			<div className="px-6 max-w-7xl w-full mx-auto relative">
				<div
					className="grid py-8"
					style={{ gridTemplateColumns: "250px 1fr 200px" }}
				>
					<Aside />
					<div className="px-10 overflow-hidden">{children}</div>
					<div className=" bg-white"></div>
				</div>
			</div>
		</div>
	);
};
