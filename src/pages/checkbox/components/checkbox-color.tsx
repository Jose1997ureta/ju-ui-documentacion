import { Card, CheckBox } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

export const CheckboxColor = () => {
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
							<CheckBox
								id="checkbox1"
								value={value}
								onChange={setValue}
								color="primary"
							/>
							<CheckBox
								id="checkbox2"
								value={value}
								onChange={setValue}
								color="secondary"
							/>
							<CheckBox
								id="checkbox3"
								value={value}
								onChange={setValue}
								color="neutral"
							/>
							<CheckBox
								id="checkbox4"
								value={value}
								onChange={setValue}
								color="success"
							/>
							<CheckBox
								id="checkbox5"
								value={value}
								onChange={setValue}
								color="warning"
							/>
							<CheckBox
								id="checkbox6"
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
					{`import { CheckBox } from "@jose-ureta/ju-ui";

const App = () => {
  const [value, setValue] = useState<boolean>(false);

	return (
		<div className="flex items-center gap-x-3">
			<CheckBox
				id="checkbox1"
				value={value}
				onChange={setValue}
				color="primary"
			/>
			<CheckBox
				id="checkbox2"
				value={value}
				onChange={setValue}
				color="secondary"
			/>
			<CheckBox
				id="checkbox3"
				value={value}
				onChange={setValue}
				color="neutral"
			/>
			<CheckBox
				id="checkbox4"
				value={value}
				onChange={setValue}
				color="success"
			/>
			<CheckBox
				id="checkbox5"
				value={value}
				onChange={setValue}
				color="warning"
			/>
			<CheckBox
				id="checkbox6"
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
