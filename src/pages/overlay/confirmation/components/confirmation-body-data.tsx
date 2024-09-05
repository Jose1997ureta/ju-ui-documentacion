import { Button, ButtonIcon, Card, Confirmation } from "@jose-ureta/ju-ui";

import { CodeShared, TabShared } from "../../../../shared/components";
import { useTab } from "../../../../shared/hooks/use-tab";
import { IoWarningOutline } from "react-icons/io5";
import { useState } from "react";

const data = [
	{ id: "1", name: "Registro 1" },
	{ id: "2", name: "Registro 2" },
	{ id: "3", name: "Registro 3" },
	{ id: "4", name: "Registro 4" },
];

export const ConfirmationBodyData = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [show, setShow] = useState<boolean>(false);

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Data Body</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<Button onClick={() => setShow(true)}>Abrir Confirmation</Button>
						<Confirmation show={show} classNameContainer="z-10">
							<Confirmation.Header
								title="¿Está seguro de eliminar los registros?"
								icon={
									<ButtonIcon
										className="w-12 h-12 sm:w-10 sm:h-10 text-2xl"
										color="danger"
									>
										<IoWarningOutline />
									</ButtonIcon>
								}
								onClose={() => setShow(false)}
							/>
							<Confirmation.Body
								text="Al confirmar se eliminaran los registros"
								data={data}
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
					{`import { Button, ButtonIcon, Confirmation } from "@jose-ureta/ju-ui";
import { IoWarningOutline } from "react-icons/io5";
import { useState } from "react";

const data = [
	{ id: "1", name: "Registro 1" },
	{ id: "2", name: "Registro 2" },
	{ id: "3", name: "Registro 3" },
	{ id: "4", name: "Registro 4" },
];
 
const App = () => {
	const [show, setShow] = useState<boolean>(false);
	const [isIcon, setIsIcon] = useState<boolean>(true);

	return (
		<>
			<Button onClick={() => setShow(true)}>Abrir Confirmation</Button>

			<Confirmation show={show} classNameContainer="z-10">
				<Confirmation.Header
					title="¿Está seguro de eliminar los registros?"
					icon={ 
						<ButtonIcon
							className="w-12 h-12 sm:w-10 sm:h-10 text-2xl"
							color="danger"
						>
							<IoWarningOutline />
						</ButtonIcon>
					}
					onClose={() => setShow(false)}
				/>
				<Confirmation.Body
					text="Al confirmar se eliminaran los registros"
					data={data}
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
		</>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
