import { Button, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const ButtonColor = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Color</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-3 flex-wrap">
							<Button color="primary">Primary</Button>
							<Button color="secondary">Secondary</Button>
							<Button color="neutral">Neutral</Button>
							<Button color="success">Success</Button>
							<Button color="warning">Warning</Button>
							<Button color="danger">Danger</Button>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Button } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<div className="flex items-center gap-3 flex-wrap">
			<Button color="primary">Primary</Button>
			<Button color="secondary">Secondary</Button>
			<Button color="neutral">Neutral</Button>
			<Button color="success">Success</Button>
			<Button color="warning">Warning</Button>
			<Button color="danger">Danger</Button>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
