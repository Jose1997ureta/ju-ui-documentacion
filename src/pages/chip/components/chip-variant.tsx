import { Card, Chip } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";

export const ChipVariant = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Variant</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex items-center gap-x-3">
							<Chip variant="solid">solid</Chip>
							<Chip variant="outline">outline</Chip>
							<Chip variant="flat">flat</Chip>
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
			<Chip variant="solid">
				solid
			</Chip>
			<Chip variant="outline">
				outline
			</Chip>
			<Chip variant="flat">
				flat
			</Chip>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
