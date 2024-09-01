import { Accordion, AccordionItemOnClick, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

const textDefault =
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

export const AccordionLoading = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [activekey, setActivekey] = useState<string[]>([]);
	const [text, setText] = useState<string>("");
	const [loading, setloading] = useState<boolean>(false);

	const handleClick = ({ item, items, state }: AccordionItemOnClick) => {
		setActivekey(items);

		if (state === "close") return;

		if (item === "item2") {
			setloading(true);
			setText(
				`Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).`
			);
			setTimeout(() => {
				setloading(false);
			}, 2000);
		}
	};

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Loading</h2>
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
									{item.id === "item1" ? <p>{textDefault}</p> : null}

									{item.id === "item2" ? (
										<div className="max-h-[100px] overflow-auto">
											{loading ? <p>Loading</p> : <p>{text}</p>}
										</div>
									) : null}

									{item.id === "item3" ? <p>{textDefault}</p> : null}
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

const textDefault = "s un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un";

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
	const [text, setText] = useState<string>("");

	const handleClick = ({ item, items, state }: AccordionItemOnClick) => {
		setActivekey(items);

		if (state === "close") return;

		if (item === "hola2") {
			setloading(true);
			setText(
				"Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo)."
			);
			setTimeout(() => {
				setloading(false);
			}, 2000);
		}
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
					{item.id === "item1" ? <p>{textDefault}</p> : null}

					{item.id === "item2" ? (
						<div className="max-h-[100px] overflow-auto">
							{<p>{text}</p>}
						</div>
					) : null}

					{item.id === "item3" ? <p>{textDefault}</p> : null}
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
