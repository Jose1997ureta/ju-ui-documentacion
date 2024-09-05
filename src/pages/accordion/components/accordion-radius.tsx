import {
	Accordion,
	AccordionItemOnClick,
	Card,
	SizeProps,
} from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

const text =
	"s un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un";

const radius = ["xs", "sm", "md", "lg"] as SizeProps[];

export const AccordionRadius = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [activekey, setActivekey] = useState<string[]>([]);

	const handleClick = ({ items }: AccordionItemOnClick) => {
		setActivekey(items);
	};

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Radius</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="grid sm:grid-cols-2 gap-3">
							{radius.map((el) => (
								<Accordion key={el} activeKeys={activekey} multiple radius={el}>
									<Accordion.Item
										keyCurrent="item1"
										onClick={handleClick}
										title={`Accordion 1 ${el}`}
										className={{
											body: "p-2",
										}}
									>
										<p className="text-sm">{text}</p>
									</Accordion.Item>
									<Accordion.Item
										keyCurrent="item2"
										onClick={handleClick}
										title={`Accordion 2 ${el}`}
										className={{
											body: "p-2",
										}}
									>
										<p className="text-sm">{text}</p>
									</Accordion.Item>
								</Accordion>
							))}
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Accordion, AccordionItemOnClick } from "@jose-ureta/ju-ui";
import { useState } from "react";

const text = "s un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un";

const radius = ["xs", "sm", "md", "lg"] as SizeProps[];

const App = () => {
	const [activekey, setActivekey] = useState<string[]>([]);

	const handleClick = ({ items }: AccordionItemOnClick) => {
		setActivekey(items);
	};

	return (
		<div className="grid sm:grid-cols-2 gap-3">
			{color.map((el) => (
				<Accordion key={el} activeKeys={activekey} multiple radius={el}>
					<Accordion.Item
						keyCurrent="item1"
						onClick={handleClick}
						title={` +
						"`Accordion 1 ${el}`" +
						`}
						className={{
							body: "p-2",
						}}
					>
						<p className="text-sm">{text}</p>
					</Accordion.Item>
					<Accordion.Item
						keyCurrent="item2"
						onClick={handleClick}
						title={` +
						"`Accordion 2 ${el}`" +
						`}
						className={{
							body: "p-2",
						}}
					>
						<p className="text-sm">{text}</p>
					</Accordion.Item>
				</Accordion>
			))}
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
