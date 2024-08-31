import { Card, Chip, Input } from "@jose-ureta/ju-ui";

import { TabShared, CodeShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiFillApi, AiOutlineUser } from "react-icons/ai";
import { useFormik } from "formik";

export const InputPattern = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const { values, handleChange } = useFormik({
		initialValues: {
			number: "",
			decimal: "",
			alphabetic: "",
			"alpha-numeric": "",
			"numeric-space": "",
			"numeric-comma": "",
		},
		onSubmit: () => {},
	});

	return (
		<div className="mt-4" id="pattern">
			<h3 className="text-xl">Pattern</h3>

			<div className="flex items-center mt-1 flex-wrap">
				<p className="text-neutral-700 mr-1">
					Puede recibir distintos formatos de escritura para validar la entrada
					de texto como:{" "}
				</p>
				<div className="flex items-center gap-0.5">
					<Chip color="neutral" variant="flat">
						number
					</Chip>
					,
					<Chip color="neutral" variant="flat">
						decimal
					</Chip>
					,
					<Chip color="neutral" variant="flat">
						alphabetic
					</Chip>
					,
					<Chip color="neutral" variant="flat">
						alpha-numeric
					</Chip>
					,
					<Chip color="neutral" variant="flat">
						numeric-space
					</Chip>
					,
					<Chip color="neutral" variant="flat">
						numeric-comma
					</Chip>
				</div>
			</div>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-2">
					<Card.Body className="border rounded-md">
						<div className="grid grid-cols-3 items-center gap-3">
							<Input
								name="number"
								value={values.number}
								onChange={handleChange}
								pattern="number"
								placeholder="Ingresar nombre"
								startContent={<AiOutlineUser />}
							/>
							<Input
								name="decimal"
								value={values.decimal}
								onChange={handleChange}
								pattern="decimal"
								placeholder="Ingresar nombre"
								endContent={<AiFillApi />}
							/>
							<Input
								name="alphabetic"
								value={values.alphabetic}
								onChange={handleChange}
								pattern="alphabetic"
								placeholder="Ingresar nombre"
								startContent={<AiOutlineUser />}
								endContent={<AiFillApi />}
							/>
							<Input
								name="alpha-numeric"
								value={values["alpha-numeric"]}
								onChange={handleChange}
								pattern="alpha-numeric"
								placeholder="Ingresar nombre"
								startContent={<AiOutlineUser />}
								endContent={<AiFillApi />}
							/>
							<Input
								name="numeric-space"
								value={values["numeric-space"]}
								onChange={handleChange}
								pattern="numeric-space"
								placeholder="Ingresar nombre"
								startContent={<AiOutlineUser />}
								endContent={<AiFillApi />}
							/>
							<Input
								name="numeric-comma"
								value={values["numeric-comma"]}
								onChange={handleChange}
								pattern="numeric-comma"
								placeholder="Ingresar nombre"
								startContent={<AiOutlineUser />}
								endContent={<AiFillApi />}
							/>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { useFormik } from "formik";

const App = () => {
	const { values, handleChange } = useFormik({
		initialValues: {
			number: "",
			decimal: "",
			alphabetic: "",
			"alpha-numeric": "",
			"numeric-space": "",
			"numeric-comma": "",
		},
		onSubmit: () => {},
	});
		
  return (
		<div className="grid grid-cols-3 items-center gap-3">
			<Input
				name="number"
				value={values.number}
				onChange={handleChange}
				pattern="number"
				placeholder="Ingresar nombre"
				startContent={<AiOutlineUser />}
			/>																							
			<Input
				name="decimal"
				value={values.decimal}
				onChange={handleChange}
				pattern="decimal"
				placeholder="Ingresar nombre"
				endContent={<AiFillApi />}
			/>
			<Input
				name="alphabetic"
				value={values.alphabetic}
				onChange={handleChange}
				pattern="alphabetic"
				placeholder="Ingresar nombre"
				startContent={<AiOutlineUser />}
				endContent={<AiFillApi />}
			/>
			<Input
				name="alpha-numeric"
				value={values["alpha-numeric"]}
				onChange={handleChange}
				pattern="alpha-numeric"
				placeholder="Ingresar nombre"
				startContent={<AiOutlineUser />}
				endContent={<AiFillApi />}
			/>
			<Input
				name="numeric-space"
				value={values["numeric-space"]}
				onChange={handleChange}
				pattern="numeric-space"
				placeholder="Ingresar nombre"
				startContent={<AiOutlineUser />}
				endContent={<AiFillApi />}
			/>
			<Input
				name="numeric-comma"
				value={values["numeric-comma"]}
				onChange={handleChange}
				pattern="numeric-comma"
				placeholder="Ingresar nombre"
				startContent={<AiOutlineUser />}
				endContent={<AiFillApi />}
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
