import { Card, LabelForm, TextArea } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

export const TextAreaDefault = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [value, setValue] = useState<string>("");

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Uso</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-4">
							<div className="w-1/2">
								<LabelForm label="Mensaje" />
								<TextArea
									value={value}
									placeholder="Ingresar mensaje"
									onChange={(e) => setValue(e.target.value)}
								/>
							</div>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { TextArea, LabelForm } from "@jose-ureta/ju-ui";
import { useState } from "react";

const App = () => {
	const [value, setValue] = useState<string>("");

	return (
		<div className="flex items-center gap-x-4">
			<div className="w-1/2">
				<LabelForm label="Mensaje" />
				<TextArea 
					value={value} 
					placeholder="Ingresar mensaje" 
					onChange={(e) => setValue(e.target.value)} />
			</div>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
