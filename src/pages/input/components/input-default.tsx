import { Card, Input, LabelForm } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const InputDefault = () => {
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
								<LabelForm label="Nombre" />
								<Input placeholder="Ingresar nombre" />
							</div>
							<div className="w-1/2">
								<LabelForm label="Email" />
								<Input placeholder="Ingresar correo electronico" />
							</div>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Input, LabelForm } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<div className="flex items-center gap-x-4">
			<div className="w-1/2">
				<LabelForm label="Nombre" />
				<Input placeholder="Ingresar nombre" />
			</div>
			<div className="w-1/2">
				<LabelForm label="Email" />
				<Input placeholder="Ingresar correo electronico" />
			</div>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
