import { Button, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const ButtonDefault = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Uso</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<Button>Button</Button>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Button } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<Button>Button</Button>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
