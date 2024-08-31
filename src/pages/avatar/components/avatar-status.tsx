import { Avatar, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const AvatarStatus = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Status</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Avatar name="Jos" status="inactive" />
							<Avatar name="Jos" status="pending" />
							<Avatar name="Jos" status="active" />
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Avatar } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<div className="flex items-center gap-x-3">
			<Avatar name="Jos" status="inactive" />
			<Avatar name="Jos" status="pending" />
			<Avatar name="Jos" status="active" />
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
