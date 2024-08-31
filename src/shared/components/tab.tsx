import { Tab } from "@jose-ureta/ju-ui";
import { keyCurrentProps } from "../interface/tab.interface";

interface TabSharePros {
	keyCurrent: keyCurrentProps;
	handleChangeTab: (key: keyCurrentProps) => void;
}

export const TabShared = ({ handleChangeTab, keyCurrent }: TabSharePros) => {
	return (
		<div className="w-fit mt-1">
			<Tab
				activeKey={keyCurrent}
				className="grid grid-cols-2"
				variant="underline"
				color="neutral"
			>
				<Tab.Item
					keyCurrent="preview"
					className="gap-x-2"
					onClick={() => handleChangeTab("preview")}
				>
					Previsualizar
				</Tab.Item>
				<Tab.Item keyCurrent="code" onClick={() => handleChangeTab("code")}>
					Codigo
				</Tab.Item>
			</Tab>
		</div>
	);
};
