import { Card, CheckBox } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

export const CheckboxDefault = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [value, setValue] = useState<boolean>(false);

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Uso</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<CheckBox
							id="checkbox1"
							onChange={setValue}
							value={value}
							color="primary"
						/>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { CheckBox } from "@jose-ureta/ju-ui";

const App = () => {
  const [value, setValue] = useState<boolean>(false);

	return (
		<CheckBox
			id="checkbox1"
			onChange={setValue}
			value={value}
			color="primary"
		/>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
