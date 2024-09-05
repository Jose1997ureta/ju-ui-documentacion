import { Card, Radio } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const RadioLabel = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Label</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="grid sm:grid-cols-2 gap-7 md:grid-cols-3">
							<Radio value="radio1" name="radio" label="Radio Button" />
							<Radio
								value="radio2"
								name="radio"
								label="Radio Button"
								description="Descripcion / Description"
							/>
							<Radio
								value="radio3"
								name="radio"
								description="Descripcion / Description"
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
			<Radio value="radio1" name="radio" label="Radio Button" />
			<Radio
				value="radio2"
				name="radio"
				label="Radio Button"
				description="Descripcion / Description"
			/>
			<Radio
				value="radio3"
				name="radio"
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
