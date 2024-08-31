import { Card, Chip } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const ChipSize = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Size</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Chip size="sm">Small</Chip>
							<Chip size="md">Medium</Chip>
							<Chip size="lg">Large</Chip>
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
			<Chip size="sm">Small</Chip>
			<Chip size="md">Medium</Chip>
			<Chip size="lg">Large</Chip>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
