import { Button, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const ButtonVariant = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Variant</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Button variant="solid" color="primary">
								Solid
							</Button>
							<Button variant="outline" color="primary">
								Outline
							</Button>
							<Button variant="light" color="primary">
								Light
							</Button>
							<Button variant="flat" color="primary">
								Flat
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
			<Button variant="solid" color="primary">
				Solid
			</Button>
			<Button variant="outline" color="primary">
				Outline
			</Button>
			<Button variant="light" color="primary">
				Light
			</Button>
			<Button variant="flat" color="primary">
				Flat
			</Button>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
