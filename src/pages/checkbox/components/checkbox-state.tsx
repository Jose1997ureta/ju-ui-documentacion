import { Card, CheckBox } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

export const CheckboxState = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [value, setValue] = useState<boolean>(false);

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Error</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="grid sm:grid-cols-2 gap-7 md:grid-cols-3">
							<CheckBox
								id="checkbox1"
								value={value}
								onChange={setValue}
								label="Empresa"
								color="primary"
								positionLabel="start"
								error="El campo es requerido"
								touched
							/>
							<CheckBox
								id="checkbox2"
								value={value}
								onChange={setValue}
								label="Empresa"
								color="primary"
								description="Descripcion / Description"
								required
								positionLabel="end"
								error="El campo es requerido"
								touched
							/>
							<CheckBox
								id="checkbox3"
								value={value}
								onChange={setValue}
								color="primary"
								description="Descripcion / Description"
								required
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
					{`import { CheckBox } from "@jose-ureta/ju-ui";

const App = () => {
  const [value, setValue] = useState<boolean>(false);

	return (
		<div className="grid sm:grid-cols-2 gap-7 md:grid-cols-3">
			<CheckBox
				id="checkbox1"
				value={value}
				onChange={setValue}
				color="primary"
				label="Empresa"
				positionLabel="start"
				error="El campo es requerido"
				touched
			/>
			<CheckBox
				id="checkbox2"
				value={value}
				onChange={setValue}
				color="primary"
				label="Empresa"
				description="Descripcion / Description"
				required
				positionLabel="end"
				error="El campo es requerido"
				touched
			/>
			<CheckBox
				id="checkbox3"
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
