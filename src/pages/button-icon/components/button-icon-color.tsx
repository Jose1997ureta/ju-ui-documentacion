import { ButtonIcon, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiFillApi } from "react-icons/ai";

export const ButtonIconColor = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Color</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<ButtonIcon color="default">
								<AiFillApi />
							</ButtonIcon>
							<ButtonIcon color="primary">
								<AiFillApi />
							</ButtonIcon>
							<ButtonIcon color="secondary">
								<AiFillApi />
							</ButtonIcon>
							<ButtonIcon color="neutral">
								<AiFillApi />
							</ButtonIcon>
							<ButtonIcon color="success">
								<AiFillApi />
							</ButtonIcon>
							<ButtonIcon color="warning">
								<AiFillApi />
							</ButtonIcon>
							<ButtonIcon color="danger">
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
			<ButtonIcon color="default">
				<AiFillApi />
			</ButtonIcon>
			<ButtonIcon color="primary">
				<AiFillApi />
			</ButtonIcon>
			<ButtonIcon color="secondary">
				<AiFillApi />
			</ButtonIcon>
			<ButtonIcon color="neutral">
				<AiFillApi />
			</ButtonIcon>
			<ButtonIcon color="success">
				<AiFillApi />
			</ButtonIcon>
			<ButtonIcon color="warning">
				<AiFillApi />
			</ButtonIcon>
			<ButtonIcon color="danger">
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
