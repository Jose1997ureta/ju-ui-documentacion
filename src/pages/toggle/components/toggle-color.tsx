import { Card, Toggle } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

export const ToggleColor = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const [value, setValue] = useState<boolean>(false);

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Color</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Toggle
								id="toogle5"
								value={value}
								onChange={setValue}
								color="primary"
							/>
							<Toggle
								id="toogle6"
								value={value}
								onChange={setValue}
								color="secondary"
							/>
							<Toggle
								id="toogle7"
								value={value}
								onChange={setValue}
								color="neutral"
							/>
							<Toggle
								id="toogle8"
								value={value}
								onChange={setValue}
								color="success"
							/>
							<Toggle
								id="toogle9"
								value={value}
								onChange={setValue}
								color="warning"
							/>
							<Toggle
								id="toogle10"
								value={value}
								onChange={setValue}
								color="danger"
							/>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Toggle } from "@jose-ureta/ju-ui";

const App = () => {
	const [value, setValue] = useState<boolean>(false);

	return (
		<div className="flex items-center gap-x-3">
			<Toggle
				id="toogle5"
				value={value}
				onChange={setValue}
				color="primary"
			/>
			<Toggle
				id="toogle6"
				value={value}
				onChange={setValue}
				color="secondary"
			/>
			<Toggle
				id="toogle7"
				value={value}
				onChange={setValue}
				color="neutral"
			/>
			<Toggle
				id="toogle8"
				value={value}
				onChange={setValue}
				color="success"
			/>
			<Toggle
				id="toogle9"
				value={value}
				onChange={setValue}
				color="warning"
			/>
			<Toggle
				id="toogle10"
				value={value}
				onChange={setValue}
				color="danger"
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
