import { Button, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const ButtonCustoms = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="custom-style">
			<h2 className="text-2xl mt-4">Custom Style</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Button
								variant="solid"
								color="primary"
								endContent={
									<span className="inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-primary-800 bg-primary-500 rounded-full">
										9
									</span>
								}
							>
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
				color="warning"
				endContent={
					<span className="inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-primary-800 bg-primary-500 rounded-full">
						9
					</span>
				}
			>
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
