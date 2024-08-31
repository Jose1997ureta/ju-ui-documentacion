import { Accordion, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

export const AccordionActiveKeys = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [activekey, setActivekey] = useState<string[]>(["item1", "item3"]);

	const handleClick = (key: string[]) => {
		setActivekey(key);
	};

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Active Keys</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<Accordion activeKeys={activekey} multiple>
							<Accordion.Item
								keyCurrent="item1"
								onClick={handleClick}
								title="Accordion 1"
								className={{
									body: "p-2",
								}}
							>
								<p className="text-sm">
									Es un hecho establecido hace demasiado tiempo que un lector se
									distraerá con el contenido del texto de un
								</p>
							</Accordion.Item>
							<Accordion.Item
								keyCurrent="item2"
								onClick={handleClick}
								title="Accordion 2"
								className={{
									body: "p-2",
								}}
							>
								<p className="text-sm">
									Es un hecho establecido hace demasiado tiempo que un lector se
									distraerá con el contenido del texto de un
								</p>
							</Accordion.Item>
							<Accordion.Item
								keyCurrent="item3"
								onClick={handleClick}
								title="Accordion 3"
								className={{
									body: "p-2",
								}}
							>
								<p className="text-sm">
									Es un hecho establecido hace demasiado tiempo que un lector se
									distraerá con el contenido del texto de un
								</p>
							</Accordion.Item>
						</Accordion>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Accordion } from "@jose-ureta/ju-ui";

const App = () => {
  const [activekey, setActivekey] = useState<string[]>(["item1", "item3"]);

	const handleClick = (key: string[]) => {
		setActivekey(key);
	};

	return (
		<Accordion activeKeys={activekey} multiple>
			<Accordion.Item
				keyCurrent="item1"
				onClick={handleClick}
				title="Accordion 1"
				className={{
					body: "p-2",
				}}
			>
				<p className="text-sm">
					Es un hecho establecido hace demasiado tiempo que un lector se 
					distraerá con el contenido de l texto de un
				</p>
			</Accordion.Item>
			<Accordion.Item
				keyCurrent="item2"
				onClick={handleClick}
				title="Accordion 2"
				className={{
					body: "p-2",
				}}
			>
				<p className="text-sm">
					Es un hecho establecido hace demasiado tiempo que un lector se 
					distraerá con el contenido de l texto de un
				</p>
		  </Accordion.Item>
			<Accordion.Item
				keyCurrent="item3"
				onClick={handleClick}
				title="Accordion 3"
				className={{
					body: "p-2",
				}}
			>
				<p className="text-sm">
					Es un hecho establecido hace demasiado tiempo que un lector se 
					distraerá con el contenido de l texto de un
				</p>
		  </Accordion.Item>
	  </Accordion>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
