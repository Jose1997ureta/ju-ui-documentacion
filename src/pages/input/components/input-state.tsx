import { Card, Input } from "@jose-ureta/ju-ui";

import { TabShared, CodeShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiFillApi, AiOutlineUser } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";

export const InputState = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const { values, handleChange, handleBlur, errors, touched } = useFormik({
		initialValues: {
			name1: "",
			name2: "",
			name3: "",
		},
		validationSchema: Yup.object().shape({
			name3: Yup.string().required("El campo es requerido"),
		}),
		onSubmit: () => {},
	});

	return (
		<div className="mt-4" id="error">
			<h3 className="text-xl">Error</h3>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-2">
					<Card.Body className="border rounded-md">
						<div className="grid sm:grid-cols-2 gap-3 md:grid-cols-3">
							<Input
								name="name1"
								value={values.name1}
								onChange={handleChange}
								placeholder="Ingresar nombre"
								startContent={<AiOutlineUser />}
								error="El campo es requerido"
								touched={true}
							/>
							<Input
								name="name2"
								value={values.name2}
								onChange={handleChange}
								placeholder="Ingresar nombre"
								endContent={<AiFillApi />}
								disabled
								error="El campo es requerido"
								touched={true}
							/>

							<Input
								name="name3"
								value={values.name3}
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder="Ingresar nombre"
								startContent={<AiOutlineUser />}
								endContent={<AiFillApi />}
								error={errors.name3}
								touched={touched.name3}
							/>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@jose-ureta/ju-ui";

const App = () => {
	const { values, handleChange } = useFormik({
		initialValues: {
			name1: "",
			name2: "",
			name3: "",
		},
		validationSchema: Yup.object().shape({
			name3: Yup.string().required("El campo es requerido"),
		}),
		onSubmit: () => {},
	});

	return (
		<div className="grid sm:grid-cols-2 gap-3 md:grid-cols-3">
			<Input
				name="name1"
				value={values.name1}
				onChange={handleChange}
				placeholder="Ingresar nombre"
				error="El campo es requerido"
				touched={true}
				startContent={<AiOutlineUser />}
			/>
			<Input
				name="name2"
				value={values.name2}
				onChange={handleChange}
				placeholder="Ingresar nombre"
				error="El campo es requerido"
				disabled
				touched={true}
				endContent={<AiFillApi />}
			/>
			<Input
				name="name3"
				value={values.name3}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder="Ingresar nombre"
				error={errors.name3}
				touched={touched.name3}
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
