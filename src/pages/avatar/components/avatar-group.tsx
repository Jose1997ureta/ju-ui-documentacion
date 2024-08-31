import { Avatar, AvatarGroup, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const AvatarItemGroup = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Group</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<AvatarGroup
							renderCount={({ total }) => (
								<Avatar
									name={`+${total}`}
									border="success"
									className="text-white bg-secondary-700"
								/>
							)}
						>
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								border="success"
							/>
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								border="success"
							/>
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								border="success"
							/>
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								border="success"
							/>
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								border="success"
							/>
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								border="success"
							/>
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								border="success"
							/>
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								border="success"
							/>
						</AvatarGroup>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Avatar } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<AvatarGroup
			renderCount={({ total }) => (
				<Avatar
					name={` +
						"`+${total}`" +
						`}					
					border="success"
					className="text-white bg-secondary-700"
				/>
			)}
		>
			<Avatar
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				border="success"
			/>
			<Avatar
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				border="success"
			/>
			<Avatar
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				border="success"
			/>
			<Avatar
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				border="success"
			/>
			<Avatar
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				border="success"
			/>
			<Avatar
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				border="success"
			/>
			<Avatar
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				border="success"
			/>
			<Avatar
				src="https://i.pravatar.cc/150?u=a04258114e29026708c"
				border="success"
			/>
		</AvatarGroup>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
