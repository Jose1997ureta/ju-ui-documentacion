import { ButtonIcon, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiFillApi } from "react-icons/ai";

export const ButtonIconDefault = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Uso</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<ButtonIcon>
							<AiFillApi />
						</ButtonIcon>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { ButtonIcon } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<ButtonIcon>
			<AiFillApi />
		</ButtonIcon>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
