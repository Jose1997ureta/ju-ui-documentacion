import {
	Button,
	ButtonIcon,
	Card,
	Chip,
	Confirmation,
} from "@jose-ureta/ju-ui";

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

export const ConfirmationFooter = () => {
	const { handleChangeTab, keyCurrent } = useTab();
	const [show, setShow] = useState<boolean>(false);

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Footer</h2>

			<div className="mt-2">
				<div className="flex items-center gap-x-1 mb-1">
					<p className="text-sm text-text-800">
						Para poder modificar el footer de la confirmacion deber actualizar
						los siguientes valores
					</p>
					<Chip variant="flat" color="neutral">
						options
					</Chip>
				</div>
				<div className="flex items-center gap-x-2 flex-wrap">
					<p className="text-sm text-text-800 mb-2">
						El component del footer tiene la opcion de modicar los botones de
						cancel y accept con los siguientes opciones:
					</p>
					<Chip variant="flat" color="neutral">
						accept
					</Chip>
					<Chip variant="flat" color="neutral">
						cancel
					</Chip>
				</div>
			</div>
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
										onAccept: () => alert(),
										variant: "outline",
										loading: true,
									},
									cancel: {
										onCancel: () => setShow(false),
										variant: "solid",
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
							onAccept: () => alert(),
							variant: "outline",
							loading: true,
						},
						cancel: {
							onCancel: () => setShow(false),
							variant: "solid",
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
