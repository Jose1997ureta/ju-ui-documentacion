import { Card, Radio } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const RadioState = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Status</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="grid sm:grid-cols-2 gap-7 md:grid-cols-3">
							<Radio
								value="radio1"
								name="radio"
								label="Radio Button"
								positionLabel="start"
								error="El campo es requerido"
								touched
							/>
							<Radio
								value="radio2"
								name="radio"
								label="Radio Button"
								description="Descripcion / Description"
								positionLabel="end"
								error="El campo es requerido"
								touched
							/>
							<Radio
								value="radio3"
								name="radio"
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
					{`import { Radio } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<div className="grid sm:grid-cols-2 gap-7 md:grid-cols-3">
			<Radio 
				value="radio1" 
				name="radio" 
				label="Radio Button" 
				positionLabel="start"
				error="El campo es requerido"
				touched
			/>
			<Radio
				value="radio2"
				name="radio"
				label="Radio Button"
				description="Descripcion / Description"
				positionLabel="end"
				error="El campo es requerido"
				touched
			/>
			<Radio
				value="radio3"
				name="radio"
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
