import { Card, Input } from "@jose-ureta/ju-ui";

import { TabShared, CodeShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiFillApi, AiOutlineUser } from "react-icons/ai";

export const InputDisabled = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	return (
		<div className="mt-4" id="disabled">
			<h3 className="text-xl">Disabled</h3>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-2">
					<Card.Body className="border rounded-md">
						<div className="grid grid-cols-3 items-center gap-x-3">
							<Input
								placeholder="Ingresar nombre"
								startContent={<AiOutlineUser />}
								disabled
							/>
							<Input
								placeholder="Ingresar nombre"
								endContent={<AiFillApi />}
								disabled
							/>

							<Input
								placeholder="Ingresar nombre"
								startContent={<AiOutlineUser />}
								endContent={<AiFillApi />}
								disabled
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
		<div className="grid grid-cols-3 items-center gap-x-3">
			<Input
				placeholder="Ingresar nombre"
				startContent={<AiOutlineUser />}
				disabled
			/>
			<Input
				placeholder="Ingresar nombre"
				endContent={<AiFillApi />}
				disabled
			/>
			<Input
				placeholder="Ingresar nombre"
				startContent={<AiOutlineUser />}
				endContent={<AiFillApi />}
				disabled
			/>
	</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
