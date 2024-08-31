import { Card, LabelForm, TextArea } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const TextAreaDefault = () => {
	const { handleChangeTab, keyCurrent } = useTab();

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
								<TextArea placeholder="Ingresar mensaje" />
							</div>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { TextArea, LabelForm } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<div className="flex items-center gap-x-4">
			<div className="w-1/2">
				<LabelForm label="Mensaje" />
				<TextArea placeholder="Ingresar mensaje" />
			</div>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
