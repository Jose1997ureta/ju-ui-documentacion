import { Accordion, AccordionItemOnClick, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

const textDefault =
	"s un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un";

export const AccordionCustomStyle = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [activekey, setActivekey] = useState<string[]>([]);

	const handleClick = ({ items }: AccordionItemOnClick) => {
		setActivekey(items);
	};

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Custom Style</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="grid grid-cols-2 gap-3">
							<Accordion activeKeys={activekey}>
								<Accordion.Item
									keyCurrent="item1"
									onClick={handleClick}
									title="Accordion 1"
									className={{
										body: "p-2",
										header: "bg-success-100",
										item: "border-success-500",
									}}
								>
									<p>{textDefault}</p>
								</Accordion.Item>
							</Accordion>
							<Accordion activeKeys={activekey}>
								<Accordion.Item
									keyCurrent="item1"
									onClick={handleClick}
									title="Accordion 1"
									className={{
										body: "p-2",
										header: "bg-danger-100",
										item: "border-danger-500",
									}}
								>
									<p>{textDefault}</p>
								</Accordion.Item>
							</Accordion>

							<Accordion activeKeys={activekey}>
								<Accordion.Item
									keyCurrent="item1"
									onClick={handleClick}
									title="Accordion 1"
									className={{
										body: "p-2",
										header: "bg-warning-100",
										item: "border-warning-700",
									}}
								>
									<p>{textDefault}</p>
								</Accordion.Item>
							</Accordion>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Accordion, AccordionItemOnClick } from "@jose-ureta/ju-ui";
import { useState } from "react";

const textDefault = "s un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un";

const App = () => {
	const [activekey, setActivekey] = useState<string[]>([]);
	const [text, setText] = useState<string>("");

	const handleClick = ({ items }: AccordionItemOnClick) => {
		setActivekey(items);
	};

	return (
		<div className="grid grid-cols-2 gap-3">
			<Accordion activeKeys={activekey}>
				<Accordion.Item
					keyCurrent="item1"
					onClick={handleClick}
					title="Accordion 1"
					className={{
						body: "p-2",
						header: "bg-success-100",
						item: "border-success-500",
					}}
				>
					<p>{textDefault}</p>
				</Accordion.Item>
			</Accordion>
			<Accordion activeKeys={activekey}>
				<Accordion.Item
					keyCurrent="item1"
					onClick={handleClick}
					title="Accordion 1"
					className={{
						body: "p-2",
						header: "bg-danger-100",
						item: "border-danger-500",
					}}
				>
					<p>{textDefault}</p>
				</Accordion.Item>
			</Accordion>

			<Accordion activeKeys={activekey}>
				<Accordion.Item
					keyCurrent="item1"
					onClick={handleClick}
					title="Accordion 1"
					className={{
						body: "p-2",
						header: "bg-warning-100",
						item: "border-warning-700",
					}}
				>
					<p>{textDefault}</p>
				</Accordion.Item>
			</Accordion>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
