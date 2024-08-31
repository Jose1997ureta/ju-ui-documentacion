import { Avatar, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const AvatarRadius = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Radius</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Avatar
								radius="full"
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
							/>
							<Avatar
								radius="lg"
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
							/>
							<Avatar
								radius="md"
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
							/>
							<Avatar
								radius="sm"
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
							/>
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
				radius="full"
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
			/>
			<Avatar
				radius="lg"
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
			/>
			<Avatar
				radius="md"
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
			/>
			<Avatar
				radius="sm"
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
