import { Card, Chip } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const ChipColor = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Color</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Chip color="primary">Primary</Chip>
							<Chip color="secondary">Secondary</Chip>
							<Chip color="neutral">Neutral</Chip>
							<Chip color="success">Suecess</Chip>
							<Chip color="warning">Warning</Chip>
							<Chip color="danger">Danger</Chip>
							<Chip color="white">White</Chip>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Chip } from "@jose-ureta/ju-ui";

const App = () => {
	return (
		<div className="flex items-center gap-x-3">
			<Chip color="primary">Primary</Chip>
			<Chip color="secondary">Secondary</Chip>
			<Chip color="neutral">Neutral</Chip>
			<Chip color="success">Suecess</Chip>
			<Chip color="warning">Warning</Chip>
			<Chip color="danger">Danger</Chip>
			<Chip color="white">White</Chip>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
