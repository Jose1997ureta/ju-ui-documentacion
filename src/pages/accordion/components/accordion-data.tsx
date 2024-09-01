import { Accordion, AccordionItemOnClick, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

const text =
	"s un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un";

const data = [
	{
		id: "item1",
		name: "Accordion 1",
	},
	{
		id: "item2",
		name: "Accordion 2",
	},
	{
		id: "item3",
		name: "Accordion 3",
	},
];

export const AccordionData = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [activekey, setActivekey] = useState<string[]>([]);

	const handleClick = ({ items }: AccordionItemOnClick) => {
		setActivekey(items);
	};

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Data</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<Accordion data={data} activeKeys={activekey} multiple>
							{({ item }) => (
								<Accordion.Item
									keyCurrent={item.id}
									onClick={handleClick}
									title={item.name}
									className={{
										body: "p-2",
									}}
								>
									<p className="text-sm">{text}</p>
								</Accordion.Item>
							)}
						</Accordion>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Accordion, AccordionItemOnClick } from "@jose-ureta/ju-ui";
import { useState } from "react";

const text = "s un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un";

const data = [
	{
		id: "item1",
		name: "Accordion 1",
	},
	{
		id: "item2",
		name: "Accordion 2",
	},
	{
		id: "item3",
		name: "Accordion 3",
	},
];

const App = () => {
	const [activekey, setActivekey] = useState<string[]>([]);

	const handleClick = ({ items }: AccordionItemOnClick) => {
		setActivekey(items);
	};

	return (
		<Accordion data={data} activeKeys={activekey} multiple>
			{({ item }) => (
				<Accordion.Item
					keyCurrent={item.id}
					onClick={handleClick}
					title={item.name}
					className={{
						body: "p-2",
					}}
				>
					<p className="text-sm">{text}</p>
				</Accordion.Item>
			)}
		</Accordion>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
