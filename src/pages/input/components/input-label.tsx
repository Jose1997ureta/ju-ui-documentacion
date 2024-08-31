import { Card, Input, LabelForm } from "@jose-ureta/ju-ui";

import { TabShared, CodeShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiFillApi, AiOutlineUser } from "react-icons/ai";

export const InputLabel = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	return (
		<div className="mt-4" id="label">
			<h3 className="text-xl">Label</h3>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="grid grid-cols-3 items-center gap-x-3 gap-y-4">
							<div>
								<LabelForm label="Nombre" />
								<Input placeholder="Ingresar nombre" />
							</div>
							<div>
								<LabelForm label="Nombre" required />
								<Input placeholder="Ingresar nombre" />
							</div>
							<div>
								<LabelForm label="Nombre" startContent={<AiOutlineUser />} />
								<Input placeholder="Ingresar nombre" />
							</div>
							<div>
								<LabelForm label="Nombre" endContent={<AiFillApi />} />
								<Input placeholder="Ingresar nombre" />
							</div>
							<div>
								<LabelForm
									label="Nombre"
									startContent={<AiOutlineUser />}
									endContent={<AiFillApi />}
								/>
								<Input placeholder="Ingresar nombre" />
							</div>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Input } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<div className="grid grid-cols-3 items-center gap-x-3 gap-y-4">
			<div>
				<LabelForm label="Nombre" />
				<Input placeholder="Ingresar nombre" />
			</div>
			<div>
				<LabelForm label="Nombre" required />
				<Input placeholder="Ingresar nombre" />
			</div>
			<div>
				<LabelForm label="Nombre" startContent={<AiOutlineUser />} />
				<Input placeholder="Ingresar nombre" />
			</div>
			<div>
				<LabelForm label="Nombre" endContent={<AiFillApi />} />
				<Input placeholder="Ingresar nombre" />
			</div>
			<div>
				<LabelForm
					label="Nombre"
					startContent={<AiOutlineUser />}
					endContent={<AiFillApi />}
				/>
				<Input placeholder="Ingresar nombre" />
			</div>
		</div>		
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
