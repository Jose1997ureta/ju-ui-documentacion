import { Aside } from "./aside";
import { Header } from "./header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="grid min-h-screen" style={{ gridTemplateRows: "60px 1fr" }}>
			<Header />
			<div className="px-6 max-w-7xl w-full mx-auto py-8">
				<div className="grid grid-cols-12">
					<Aside />
					{children}
				</div>
			</div>
		</div>
	);
};
