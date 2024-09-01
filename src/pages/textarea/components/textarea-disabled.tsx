import { Card, TextArea } from "@jose-ureta/ju-ui";
import { TabShared, CodeShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiOutlineUser } from "react-icons/ai";

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
								value=""
							/>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { TextArea } from "@jose-ureta/ju-ui";
import { AiOutlineUser } from "react-icons/ai";

const App = () => {
	return (
		<div className="grid grid-cols-2 items-center gap-x-3">
			<TextArea
				disabled
				placeholder="Ingresar mensaje"
				startContent={<AiOutlineUser />}
				value=""
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
