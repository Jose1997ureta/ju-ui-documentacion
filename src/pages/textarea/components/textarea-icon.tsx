import { Card, TextArea } from "@jose-ureta/ju-ui";

import { TabShared, CodeShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

export const TextAreaIcon = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [value, setValue] = useState<string>("");

	return (
		<div className="mt-4" id="icon">
			<h3 className="text-xl">Icon</h3>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="grid grid-cols-2 items-center gap-x-3">
							<TextArea
								value={value}
								placeholder="Ingresar mensaje"
								startContent={<AiOutlineUser />}
								onChange={(e) => setValue(e.target.value)}
							/>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { TextArea } from "@jose-ureta/ju-ui";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

const App = () => {
	const [value, setValue] = useState<string>("");
	return (
		<div className="grid grid-cols-2 items-center gap-x-3">
			<TextArea
				value={value}
				placeholder="Ingresar mensaje"
				startContent={<AiOutlineUser />}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
