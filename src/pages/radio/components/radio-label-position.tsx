import { Card, Radio } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const RadioLabelPosition = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Label Position</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-7">
							<Radio
								value="radio1"
								name="radio"
								label="Radio Button"
								positionLabel="start"
							/>
							<Radio
								value="radio2"
								name="radio"
								label="Radio Button"
								description="Descripcion / Description"
								positionLabel="end"
							/>
							<Radio
								value="radio3"
								name="radio"
								description="Descripcion / Description"
								positionLabel="start"
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
		<div className="flex items-center gap-x-7">
			<Radio 
				value="radio1" 
				name="radio" 
				label="Radio Button" 
				positionLabel="start"
			/>
			<Radio
				value="radio2"
				name="radio"
				label="Radio Button"
				description="Descripcion / Description"
				positionLabel="end"
			/>
			<Radio
				value="radio3"
				name="radio"
				description="Descripcion / Description"
				positionLabel="start"
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
