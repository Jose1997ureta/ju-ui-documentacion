import { Button, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiFillApi } from "react-icons/ai";

export const ButtonWithIcon = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Icon</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Button
								variant="solid"
								color="primary"
								startContent={<AiFillApi />}
							>
								Button
							</Button>
							<Button
								variant="outline"
								color="primary"
								endContent={<AiFillApi />}
							>
								Button
							</Button>
							<Button
								variant="light"
								color="primary"
								startContent={<AiFillApi />}
							>
								Button
							</Button>
							<Button variant="flat" color="primary" endContent={<AiFillApi />}>
								Button
							</Button>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Button } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<div className="flex items-center gap-x-3">
			<Button
				variant="solid"
				color="primary"
				startContent={<AiFillApi />}
			>
				Button
			</Button>
			<Button
				variant="outline"
				color="primary"
				endContent={<AiFillApi />}
			>
				Button
			</Button>
			<Button
				variant="light"
				color="primary"
				startContent={<AiFillApi />}
			>
				Button
			</Button>
			<Button variant="flat" color="primary" endContent={<AiFillApi />}>
				Button
			</Button>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
