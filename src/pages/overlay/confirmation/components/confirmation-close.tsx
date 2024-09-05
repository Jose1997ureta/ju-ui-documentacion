import { Button, ButtonIcon, Card, Confirmation } from "@jose-ureta/ju-ui";

import { CodeShared, TabShared } from "../../../../shared/components";
import { useTab } from "../../../../shared/hooks/use-tab";
import { IoWarningOutline } from "react-icons/io5";
import { useState } from "react";

export const ConfirmatioClose = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const [show, setShow] = useState<boolean>(false);

	const [isClose, setIsClose] = useState<boolean>(true);

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Icon Close</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex gap-x-4 items-center">
							<Button onClick={() => setShow(true)}>Abrir Confirmation</Button>
							<Button
								onClick={() => setIsClose((state) => !state)}
								variant="flat"
								color="neutral"
							>
								{isClose ? "Ocultar icono" : "Mostrar icono"}
							</Button>
						</div>

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
								isClose={isClose}
							/>
							<Confirmation.Body
								text="Al confirmar se eliminaran los registros"
								isIcon={true}
								isClose={isClose}
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
 
const App = () => {
	const [show, setShow] = useState<boolean>(false);
	const [isClose, setIsClose] = useState<boolean>(true);

	return (
		<>
			<div className="flex gap-x-4 items-center">
				<Button onClick={() => setShow(true)}>Abrir Confirmation</Button>
				<Button
					onClick={() => setIsClose((state) => !state)}
					variant="flat"
					color="neutral"
				>
					{isClose ? "Ocultar icono" : "Mostrar icono"}
				</Button>
			</div>

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
					isClose={isClose}
				/>
				<Confirmation.Body
					text="Al confirmar se eliminaran los registros"
					isIcon={true}
					isClose={isClose}
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
