import { Avatar, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const AvatarBorder = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Border</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Avatar border="default" name="Jos" />
							<Avatar
								border="primary"
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
							/>
							<Avatar border="secondary" name="Jos" />
							<Avatar
								border="neutral"
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
							/>
							<Avatar border="success" name="Jos" />
							<Avatar
								border="warning"
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
							/>
							<Avatar border="danger" name="Jos" />
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
			<Avatar
				border="default"
				name="Jos"
			/>
			<Avatar
				border="primary"
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
			/>
			<Avatar
				border="secondary"
				name="Jos"
			/>
			<Avatar
				border="neutral"
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
			/>
			<Avatar
				border="success"
				name="Jos"
			/>
			<Avatar
				border="warning"
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
			/>
			<Avatar
				border="danger"
				name="Jos"
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
