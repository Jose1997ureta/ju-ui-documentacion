import { Card, Input } from "@jose-ureta/ju-ui";

import { TabShared, CodeShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiFillApi, AiOutlineUser } from "react-icons/ai";

export const InputIcon = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	return (
		<div className="mt-4" id="icon">
			<h3 className="text-xl">Icon</h3>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="grid grid-cols-3 items-center gap-x-3">
							<Input
								placeholder="Ingresar nombre"
								startContent={<AiOutlineUser />}
							/>
							<Input placeholder="Ingresar nombre" endContent={<AiFillApi />} />
							<Input
								placeholder="Ingresar nombre"
								startContent={<AiOutlineUser />}
								endContent={<AiFillApi />}
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
			/>
			<Input
				placeholder="Ingresar nombre"
				endContent={<AiFillApi />}
			/>
			<Input
				placeholder="Ingresar nombre"
				startContent={<AiOutlineUser />}
				endContent={<AiFillApi />}
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
