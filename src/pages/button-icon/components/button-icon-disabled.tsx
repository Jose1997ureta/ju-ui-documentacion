import { ButtonIcon, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiFillApi } from "react-icons/ai";

export const ButtonIconDisabled = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Disabled</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<ButtonIcon variant="solid" color="primary" disabled>
								<AiFillApi />
							</ButtonIcon>
							<ButtonIcon variant="outline" color="primary" disabled>
								<AiFillApi />
							</ButtonIcon>
							<ButtonIcon variant="light" color="primary" disabled>
								<AiFillApi />
							</ButtonIcon>
							<ButtonIcon variant="flat" color="primary" disabled>
								<AiFillApi />
							</ButtonIcon>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { ButtonIcon } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<div className="flex items-center gap-x-3">
			<ButtonIcon variant="solid" color="primary" disabled>
				<AiFillApi />
			</ButtonIcon>
			<ButtonIcon variant="outline" color="primary" disabled>
				<AiFillApi />
			</ButtonIcon>
			<ButtonIcon variant="light" color="primary" disabled>
				<AiFillApi />
			</ButtonIcon>
			<ButtonIcon variant="flat" color="primary" disabled>
				<AiFillApi />
			</ButtonIcon>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
