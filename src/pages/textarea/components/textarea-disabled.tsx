import { Card, TextArea } from "@jose-ureta/ju-ui";

import { TabShared, CodeShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiFillApi, AiOutlineUser } from "react-icons/ai";

export const TextAreaDisabled = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	return (
		<div className="mt-4" id="disabled">
			<h3 className="text-xl">Disabled</h3>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-2">
					<Card.Body className="border rounded-md">
						<div className="grid grid-cols-2 items-center gap-x-3">
							<TextArea
								placeholder="Ingresar mensaje"
								startContent={<AiOutlineUser />}
								disabled
							/>
							<TextArea
								placeholder="Ingresar mensaje"
								startContent={<AiFillApi />}
								disabled
							/>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { TextArea } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<div className="grid grid-cols-2 items-center gap-x-3">
			<TextArea
				disabled
				placeholder="Ingresar mensaje"
				startContent={<AiOutlineUser />}
			/>
			<TextArea
				disabled
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
