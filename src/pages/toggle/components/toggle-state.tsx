import { Card, Toggle } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

export const ToggleState = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const [value, setValue] = useState<boolean>(false);

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Status</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-7">
							<Toggle
								id="toogle18"
								value={value}
								onChange={setValue}
								color="primary"
								label="Empresa"
								positionLabel="start"
								error="El campo es requerido"
								touched
							/>
							<Toggle
								id="toogle19"
								value={value}
								onChange={setValue}
								color="primary"
								label="Empresa"
								description="Descripcion / Description"
								positionLabel="end"
								error="El campo es requerido"
								touched
							/>
							<Toggle
								id="toogle20"
								value={value}
								onChange={setValue}
								color="primary"
								description="Descripcion / Description"
								positionLabel="start"
								error="El campo es requerido"
								touched
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
				id="toogle18"
				value={value}
				onChange={setValue}
				color="primary"
				label="Empresa"
				positionLabel="start"
				error="El campo es requerido"
				touched
			/>
			<Toggle
				id="toogle19"
				value={value}
				onChange={setValue}
				color="primary"
				label="Empresa"
				description="Descripcion / Description"
				positionLabel="end"
				error="El campo es requerido"
				touched
			/>
			<Toggle
				id="toogle20"
				value={value}
				onChange={setValue}
				color="primary"
				description="Descripcion / Description"
				positionLabel="start"
				error="El campo es requerido"
				touched
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
