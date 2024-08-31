import { Avatar, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const AvatarName = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Name</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Avatar size="xs" name="+5" />
							<Avatar size="sm" name="Ant" />
							<Avatar name="Jos" />
							<Avatar size="lg" name="Jose" />
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
			<Avatar size="xs" name="+5" />
			<Avatar size="sm" name="Ant" />
			<Avatar name="Jos" />
			<Avatar size="lg" name="Jose" />
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
