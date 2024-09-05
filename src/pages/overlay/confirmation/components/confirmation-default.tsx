import { Button, Card, Confirmation } from "@jose-ureta/ju-ui";

import { CodeShared, TabShared } from "../../../../shared/components";
import { useTab } from "../../../../shared/hooks/use-tab";
import { useState } from "react";

export const ConfirmationDefault = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const [show, setShow] = useState<boolean>(false);

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Uso</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<Button onClick={() => setShow(true)}>Abrir Confirmation</Button>

						<Confirmation show={show} classNameContainer="z-10">
							<Confirmation.Header
								title="¿Está seguro de eliminar los registros?"
								onClose={() => setShow(false)}
							/>
							<Confirmation.Body
								text="Al confirmar se eliminaran los registros"
								isIcon={false}
							/>
							<Confirmation.Footer
								options={{
									accept: {
										text: "Confirmar",
										color: "danger",
									},
									cancel: {
										onCancel: () => setShow(false),
									},
								}}
							/>
						</Confirmation>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Button, Confirmation } from "@jose-ureta/ju-ui";
import { useState } from "react";
 
const App = () => {
	const [show, setShow] = useState<boolean>(false);

	return (
		<>
			<Button onClick={() => setShow(true)}>Abrir Confirmation</Button>

			<Confirmation show={show} classNameContainer="z-10">
				<Confirmation.Header
					title="¿Está seguro de eliminar los registros?"
					onClose={() => setShow(false)}
				/>
				<Confirmation.Body text="Al confirmar se eliminaran los registros" isIcon={false} />
				<Confirmation.Footer
					options={{
						accept: {
							text: "Confirmar",
							color: "danger",
						},
						cancel: {
							onCancel: () => setShow(false),
						},
					}}
				/>
			</Confirmation>
		</>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
