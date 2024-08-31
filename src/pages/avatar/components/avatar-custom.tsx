import { Avatar, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { LuBellRing } from "react-icons/lu";

export const AvatarCustom = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Custom</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Avatar
								status="active"
								content={<LuBellRing className="w-5 h-5" />}
							/>
							<Avatar
								status="active"
								content={<LuBellRing className="w-5 h-5" />}
								border="success"
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
				status="active"
				content={<LuBellRing className="w-5 h-5" />}
			/>
			<Avatar
				status="active"
				border="success"
				content={<LuBellRing className="w-5 h-5" />}
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
