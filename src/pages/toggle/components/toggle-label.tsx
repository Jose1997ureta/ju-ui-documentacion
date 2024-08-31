import { Card, Toggle } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

export const ToggleLabel = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const [value, setValue] = useState<boolean>(false);

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Label</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-7">
							<Toggle
								id="toogle11"
								value={value}
								onChange={setValue}
								color="primary"
								label="Empresa"
							/>
							<Toggle
								id="toogle12"
								value={value}
								onChange={setValue}
								color="primary"
								label="Empresa"
								description="Descripcion / Description"
							/>
							<Toggle
								id="toogle13"
								value={value}
								onChange={setValue}
								color="primary"
								description="Descripcion / Description"
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
		<div className="flex items-center gap-x-7">
			<Toggle
				id="toogle11"
				value={value}
				onChange={setValue}
				color="primary"
				label="Empresa"
			/>
			<Toggle
				id="toogle12"
				value={value}
				onChange={setValue}
				color="primary"
				label="Empresa"
				description="Descripcion / Description"
			/>
			<Toggle
				id="toogle13"
				value={value}
				onChange={setValue}
				color="primary"
				description="Descripcion / Description"
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
