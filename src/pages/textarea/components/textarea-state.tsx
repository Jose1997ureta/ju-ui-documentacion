import { Card, TextArea } from "@jose-ureta/ju-ui";

import { TabShared, CodeShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiOutlineUser } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";

export const TextAreaState = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const { values, handleChange, handleBlur, errors, touched } = useFormik({
		initialValues: {
			message1: "",
			message2: "",
			message3: "",
		},
		validationSchema: Yup.object().shape({
			message3: Yup.string().required("El campo es requerido"),
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
							<TextArea
								name="message1"
								value={values.message1}
								onChange={handleChange}
								placeholder="Ingresar mensaje"
								startContent={<AiOutlineUser />}
								error="El campo es requerido"
								touched={true}
							/>
							<TextArea
								name="message2"
								value={values.message2}
								onChange={handleChange}
								placeholder="Ingresar mensaje"
								disabled
								error="El campo es requerido"
								touched={true}
							/>
							<TextArea
								name="message3"
								value={values.message3}
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder="Ingresar mensaje"
								startContent={<AiOutlineUser />}
								error={errors.message3}
								touched={touched.message3}
								maxLength={40}
								isLabelCounter
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
import { AiOutlineUser } from "react-icons/ai";

const App = () => {
	const { values, handleChange } = useFormik({
		initialValues: {
			message1: "",
			message2: "",
			message3: "",
		},
		validationSchema: Yup.object().shape({
			message3: Yup.string().required("El campo es requerido"),
		}),
		onSubmit: () => {},
	});

	return (
		<div className="grid sm:grid-cols-2 gap-3 md:grid-cols-3">
			<TextArea
				name="message1"
				value={values.message1}
				onChange={handleChange}
				placeholder="Ingresar mensaje"
				startContent={<AiOutlineUser />}
				error="El campo es requerido"
				touched={true}
			/>
			<TextArea
				name="message2"
				value={values.message2}
				onChange={handleChange}
				placeholder="Ingresar mensaje"
				disabled
				error="El campo es requerido"
				touched={true}
			/>
			<TextArea
				name="message3"
				value={values.message3}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder="Ingresar mensaje"
				startContent={<AiOutlineUser />}
				error={errors.message3}
				touched={touched.message3}
				maxLength={40}
				isLabelCounter
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
