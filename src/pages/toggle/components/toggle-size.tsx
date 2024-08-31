import { Card, Toggle } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

export const ToggleSize = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const [value, setValue] = useState<boolean>(false);

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Size</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Toggle
								id="toogle2"
								value={value}
								onChange={setValue}
								size="sm"
								color="primary"
							/>
							<Toggle
								id="toogle3"
								value={value}
								onChange={setValue}
								size="md"
								color="primary"
							/>
							<Toggle
								id="toogle4"
								value={value}
								onChange={setValue}
								size="lg"
								color="primary"
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
				id="toogle2"
				value={value}
				onChange={setValue}
				size="sm"
				color="primary"
			/>
			<Toggle
				id="toogle3"
				value={value}
				onChange={setValue}
				size="md"
				color="primary"
			/>
			<Toggle
				id="toogle4"
				value={value}
				onChange={setValue}
				size="lg"
				color="primary"
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
