import { Accordion, AccordionItemOnClick, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

import clsx from "clsx";

const textDefault =
	"s un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un";

export const AccordionHeaderContent = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [activekey, setActivekey] = useState<string[]>([]);

	const handleClick = ({ items }: AccordionItemOnClick) => {
		setActivekey(items);
	};

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Header Content</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<Accordion activeKeys={activekey}>
							<Accordion.Item
								keyCurrent="item1"
								onClick={handleClick}
								contentHeader={
									<>
										<div className="flex items-center gap-x-2">
											<AiOutlineUser />

											<p className="text-text-800">Accordion 1</p>
										</div>

										<IoIosArrowDown
											className={clsx(
												activekey.includes("item1") &&
													"transform rotate-180 transition-transform duration-300",
												"h-4 w-4 fill-text-800"
											)}
										/>
									</>
								}
								className={{
									body: "p-2",
								}}
							>
								<p>{textDefault}</p>
							</Accordion.Item>
							<Accordion.Item
								keyCurrent="item2"
								onClick={handleClick}
								contentHeader={
									<>
										<div className="flex items-center gap-x-2">
											<AiOutlineUser />

											<p className="text-text-800">Accordion 2</p>
										</div>

										<IoIosArrowDown
											className={clsx(
												activekey.includes("item2") &&
													"transform rotate-180 transition-transform duration-300",
												"h-4 w-4 fill-text-800"
											)}
										/>
									</>
								}
								className={{
									body: "p-2",
								}}
							>
								<p>{textDefault}</p>
							</Accordion.Item>
						</Accordion>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Accordion, AccordionItemOnClick } from "@jose-ureta/ju-ui";
import { useState } from "react";
import clsx from "clsx";

const textDefault = "s un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un";

const App = () => {
	const [activekey, setActivekey] = useState<string[]>([]);
	const [text, setText] = useState<string>("");

	const handleClick = ({ items }: AccordionItemOnClick) => {
		setActivekey(items);
	};

	return (
		<Accordion activeKeys={activekey}>
			<Accordion.Item
				keyCurrent="item1"
				onClick={handleClick}
				contentHeader={
					<>
						<div className="flex items-center gap-x-2">
							<AiOutlineUser />

							<p className="text-text-800">Accordion 1</p>
						</div>

						<IoIosArrowDown
							className={clsx(
								activekey.includes("item1") &&
									"transform rotate-180 transition-transform duration-300",
								"h-4 w-4 fill-text-800"
							)}
						/>
					</>
				}
				className={{
					body: "p-2",
				}}
			>
				<p>{textDefault}</p>
			</Accordion.Item>
			<Accordion.Item
				keyCurrent="item2"
				onClick={handleClick}
				contentHeader={
					<>
						<div className="flex items-center gap-x-2">
							<AiOutlineUser />

							<p className="text-text-800">Accordion 2</p>
						</div>

						<IoIosArrowDown
							className={clsx(
								activekey.includes("item2") &&
									"transform rotate-180 transition-transform duration-300",
								"h-4 w-4 fill-text-800"
							)}
						/>
					</>
				}
				className={{
					body: "p-2",
				}}
			>
				<p>{textDefault}</p>
			</Accordion.Item>
		</Accordion>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
