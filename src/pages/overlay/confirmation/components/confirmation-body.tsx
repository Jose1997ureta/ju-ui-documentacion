import { Button, ButtonIcon, Card, Confirmation } from "@jose-ureta/ju-ui";

import { CodeShared, TabShared } from "../../../../shared/components";
import { useTab } from "../../../../shared/hooks/use-tab";
import { IoWarningOutline } from "react-icons/io5";
import { useState } from "react";

export const ConfirmationBody = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const [show, setShow] = useState<boolean>(false);
	const [isIcon, setIsIcon] = useState<boolean>(true);
	const [isClose, setIsClose] = useState<boolean>(true);

	return (
		<div className="mt-2" id="uso">
			<h2 className="text-2xl mt-4">Body Custom</h2>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex gap-x-4 items-center">
							<Button onClick={() => setShow(true)}>Abrir Confirmation</Button>
							<Button
								onClick={() => setIsIcon((state) => !state)}
								variant="flat"
								color="neutral"
							>
								{isIcon ? "Ocultar icono" : "Mostrar icono"}
							</Button>
							<Button
								onClick={() => setIsClose((state) => !state)}
								variant="flat"
								color="neutral"
							>
								{isClose ? "Ocultar icono close" : "Mostrar iconom close"}
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
							/>
							<Confirmation.Body
								className="max-h-52 overflow-y-auto"
								isClose={isClose}
								isIcon={isIcon}
							>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Commodi, cum illum ad temporibus, delectus tenetur cumque
									necessitatibus praesentium facilis dolorem quasi ab vitae,
									tempore laboriosam architecto. Animi veniam eos fuga.
									Necessitatibus distinctio dolores nulla deserunt voluptatibus
									laudantium, libero facilis hic saepe itaque blanditiis vel
									quibusdam ea? Obcaecati, sint nulla fugiat eaque, maiores,
									minima ullam quisquam officia esse voluptatum eveniet maxime.
									Officiis ipsam itaque earum inventore obcaecati amet at
									provident ipsum nihil consectetur eveniet esse, beatae unde
									natus sed magnam debitis voluptatum dolorem? Eum distinctio
									blanditiis harum voluptas reiciendis, doloremque asperiores.
									Sequi ullam nostrum provident nulla repudiandae cum suscipit
									dolorum ad sit laborum, quod tenetur velit veniam praesentium
									facere nemo blanditiis accusantium quisquam voluptate eligendi
									rerum recusandae quam mollitia. Animi, mollitia. Iure ullam
									incidunt omnis voluptatum, corporis totam beatae odio fuga
									quidem nemo! Impedit eaque quibusdam iste dolor totam qui
									fugit aspernatur, reprehenderit voluptate animi iusto
									temporibus molestiae perspiciatis et ab? Nam, velit est autem
									nihil sint odit. Asperiores enim odit dolore perspiciatis
									debitis earum, vel nobis numquam neque, tempora quo! Quisquam
									voluptatum et voluptatibus in corporis tempora velit eligendi
									officiis? Repudiandae alias quis ab neque at provident maxime,
									omnis aspernatur mollitia libero, possimus quasi explicabo
									sequi repellendus in distinctio quidem. Facere adipisci odit
									autem hic ab. Illo sit debitis id. In quas similique et sit
									maiores minus incidunt sequi alias quam deserunt odit fugit,
									fuga optio suscipit asperiores impedit amet necessitatibus,
									itaque hic. Voluptas tempore tenetur, totam consectetur error
									natus? Illo perferendis iure necessitatibus quos dicta. Totam
									cum laudantium in nihil, eveniet atque architecto natus, quod
									reiciendis sint explicabo possimus ut cupiditate eum sunt,
									alias odio itaque accusamus ea unde? Repudiandae quod, aut
									illum delectus animi laudantium. Inventore voluptates maxime
									adipisci eaque quas, quaerat ipsam dignissimos ipsum minus cum
									assumenda ea nihil distinctio enim mollitia, repellendus
									deleniti nam, natus explicabo.
								</p>
							</Confirmation.Body>
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
	const [isIcon, setIsIcon] = useState<boolean>(true);
	const [isClose, setIsClose] = useState<boolean>(true);

	return (
		<>
			<div className="flex gap-x-4 items-center">
				<Button onClick={() => setShow(true)}>Abrir Confirmation</Button>
				<Button
					onClick={() => setIsIcon((state) => !state)}
					variant="flat"
					color="neutral"
				>
					{isIcon ? "Ocultar icono" : "Mostrar icono"}
				</Button>
				<Button
					onClick={() => setIsClose((state) => !state)}
					variant="flat"
					color="neutral"
				>
					{isClose ? "Ocultar icono close" : "Mostrar iconom close"}
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
				/>
				<Confirmation.Body
					className="max-h-52 overflow-y-auto"
					isClose={isClose}
					isIcon={isIcon}
				>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Commodi, cum illum ad temporibus, delectus tenetur cumque
						necessitatibus praesentium facilis dolorem quasi ab vitae,
						tempore laboriosam architecto. Animi veniam eos fuga.
						Necessitatibus distinctio dolores nulla deserunt voluptatibus
						laudantium, libero facilis hic saepe itaque blanditiis vel
						quibusdam ea? Obcaecati, sint nulla fugiat eaque, maiores,
						minima ullam quisquam officia esse voluptatum eveniet maxime.
						Officiis ipsam itaque earum inventore obcaecati amet at
						provident ipsum nihil consectetur eveniet esse, beatae unde
						natus sed magnam debitis voluptatum dolorem? Eum distinctio
						blanditiis harum voluptas reiciendis, doloremque asperiores.
						Sequi ullam nostrum provident nulla repudiandae cum suscipit
						dolorum ad sit laborum, quod tenetur velit veniam praesentium
						facere nemo blanditiis accusantium quisquam voluptate eligendi
						rerum recusandae quam mollitia. Animi, mollitia. Iure ullam
						incidunt omnis voluptatum, corporis totam beatae odio fuga
						quidem nemo! Impedit eaque quibusdam iste dolor totam qui
						fugit aspernatur, reprehenderit voluptate animi iusto
						temporibus molestiae perspiciatis et ab? Nam, velit est autem
						nihil sint odit. Asperiores enim odit dolore perspiciatis
						debitis earum, vel nobis numquam neque, tempora quo! Quisquam
						voluptatum et voluptatibus in corporis tempora velit eligendi
						officiis? Repudiandae alias quis ab neque at provident maxime,
						omnis aspernatur mollitia libero, possimus quasi explicabo
						sequi repellendus in distinctio quidem. Facere adipisci odit
						autem hic ab. Illo sit debitis id. In quas similique et sit
						maiores minus incidunt sequi alias quam deserunt odit fugit,
						fuga optio suscipit asperiores impedit amet necessitatibus,
						itaque hic. Voluptas tempore tenetur, totam consectetur error
						natus? Illo perferendis iure necessitatibus quos dicta. Totam
						cum laudantium in nihil, eveniet atque architecto natus, quod
						reiciendis sint explicabo possimus ut cupiditate eum sunt,
						alias odio itaque accusamus ea unde? Repudiandae quod, aut
						illum delectus animi laudantium. Inventore voluptates maxime
						adipisci eaque quas, quaerat ipsam dignissimos ipsum minus cum
						assumenda ea nihil distinctio enim mollitia, repellendus
						deleniti nam, natus explicabo.
					</p>
				</Confirmation.Body>
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
