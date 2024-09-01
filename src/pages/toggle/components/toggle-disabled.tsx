import { Card, Toggle } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

export const ToggleDisabled = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const [value, setValue] = useState<boolean>(false);

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Disabled</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-7">
							<Toggle
								id="toogle17"
								value={value}
								onChange={setValue}
								color="primary"
								disabled
							/>
							<Toggle
								id="toogle18"
								value={value}
								onChange={setValue}
								color="primary"
								label="Empresa"
								positionLabel="start"
								disabled
							/>
							<Toggle
								id="toogle19"
								value={value}
								onChange={setValue}
								color="primary"
								label="Empresa"
								description="Descripcion / Description"
								positionLabel="end"
								disabled
							/>
							<Toggle
								id="toogle20"
								value={value}
								onChange={setValue}
								color="primary"
								description="Descripcion / Description"
								positionLabel="start"
								disabled
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
				id="toogle17"
				value={value}
				onChange={setValue}
				color="primary"
				disabled
			/>
			<Toggle
				id="toogle18"
				value={value}
				onChange={setValue}
				color="primary"
				label="Empresa"
				positionLabel="start"
				disabled
			/>
			<Toggle
				id="toogle19"
				value={value}
				onChange={setValue}
				color="primary"
				label="Empresa"
				description="Descripcion / Description"
				positionLabel="end"
				disabled
			/>
			<Toggle
				id="toogle20"
				value={value}
				onChange={setValue}
				color="primary"
				description="Descripcion / Description"
				positionLabel="start"
				disabled
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
