import { Accordion, Card } from "@jose-ureta/ju-ui";
import { CodeShared, TabShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { useState } from "react";

export const AccordionDefault = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [activekey, setActivekey] = useState<string[]>(["item1", "item2"]);

	const handleClick = (key: string[]) => {
		setActivekey(key);
	};

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Uso</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<Accordion activeKeys={activekey}>
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
								<div className="max-h-[100px] overflow-auto">
									<p className="text-sm">
										Es un hecho establecido hace demasiado tiempo que un lector
										se distraerá con el contenido del texto de un sitio mientras
										que mira su diseño. El punto de usar Lorem Ipsum es que
										tiene una distribución más o menos normal de las letras, al
										contrario de usar textos como por ejemplo "Contenido aquí,
										contenido aquí". Estos textos hacen parecerlo un español que
										se puede leer. Muchos paquetes de autoedición y editores de
										páginas web usan el Lorem Ipsum como su texto por defecto, y
										al hacer una búsqueda de "Lorem Ipsum" va a dar por
										resultado muchos sitios web que usan este texto si se
										encuentran en estado de desarrollo. Muchas versiones han
										evolucionado a través de los años, algunas veces por
										accidente, otras veces a propósito (por ejemplo insertándole
										humor y cosas por el estilo).
									</p>
								</div>
							</Accordion.Item>
						</Accordion>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Accordion } from "@jose-ureta/ju-ui";

const App = () => {
  const [activekey, setActivekey] = useState<string[]>([]);

	const handleClick = (key: string[]) => {
		setActivekey(key);
	};

	return (
		<Accordion activeKeys={activekey}>
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
				<div className="max-h-[100px] overflow-auto">
          <p className="text-sm">
            Es un hecho establecido hace demasiado tiempo que un lector
            se distraerá con el contenido del texto de un sitio mientras
            que mira su diseño. El punto de usar Lorem Ipsum es que
            tiene una distribución más o menos normal de las letras, al
            contrario de usar textos como por ejemplo "Contenido aquí,
            contenido aquí". Estos textos hacen parecerlo un español que
            se puede leer. Muchos paquetes de autoedición y editores de
            páginas web usan el Lorem Ipsum como su texto por defecto, y
            al hacer una búsqueda de "Lorem Ipsum" va a dar por
            resultado muchos sitios web que usan este texto si se
            encuentran en estado de desarrollo. Muchas versiones han
            evolucionado a través de los años, algunas veces por
            accidente, otras veces a propósito (por ejemplo insertándole
            humor y cosas por el estilo).
          </p>
			  </div>
		  </Accordion.Item>
	  </Accordion>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
