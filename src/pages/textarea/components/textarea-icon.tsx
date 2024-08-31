import { Card, TextArea } from "@jose-ureta/ju-ui";

import { TabShared, CodeShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiFillApi, AiOutlineUser } from "react-icons/ai";

export const TextAreaIcon = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	return (
		<div className="mt-4" id="icon">
			<h3 className="text-xl">Icon</h3>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="grid grid-cols-2 items-center gap-x-3">
							<TextArea
								placeholder="Ingresar mensaje"
								startContent={<AiOutlineUser />}
							/>
							<TextArea
								placeholder="Ingresar mensaje"
								startContent={<AiFillApi />}
							/>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Input } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<div className="grid grid-cols-2 items-center gap-x-3">
			<TextArea
				placeholder="Ingresar mensaje"
				startContent={<AiOutlineUser />}
			/>
			<TextArea
				placeholder="Ingresar mensaje"
				startContent={<AiFillApi />}
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
