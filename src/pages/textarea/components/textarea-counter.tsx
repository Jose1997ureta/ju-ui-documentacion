import { Card, TextArea } from "@jose-ureta/ju-ui";

import { TabShared, CodeShared } from "../../../shared/components";
import { useTab } from "../../../shared/hooks/use-tab";
import { AiFillApi, AiOutlineUser } from "react-icons/ai";
import { useFormik } from "formik";

export const TextAreaCounter = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const { values, handleChange } = useFormik({
		initialValues: {
			message1: "",
			message2: "",
		},
		onSubmit: () => {},
	});

	return (
		<div className="mt-4" id="icon">
			<h3 className="text-xl">Counter</h3>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="grid grid-cols-2 items-center gap-x-3">
							<TextArea
								name="message1"
								value={values.message1}
								onChange={handleChange}
								placeholder="Ingresar mensaje"
								startContent={<AiOutlineUser />}
								maxLength={40}
								isLabelCounter
							/>
							<TextArea
								name="message2"
								value={values.message2}
								onChange={handleChange}
								placeholder="Ingresar mensaje"
								startContent={<AiFillApi />}
								maxLength={40}
							/>
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { Input } from "@jose-ureta/ju-ui";
import { useFormik } from "formik";
import { AiFillApi, AiOutlineUser } from "react-icons/ai";

const App = () => {
	const { values, handleChange } = useFormik({
		initialValues: {
			message1: "",
			message2: "",
		},
		onSubmit: () => {},
	});

	return (
		<div className="grid grid-cols-2 items-center gap-x-3">
			<TextArea
				name="message1"
				value={values.message1}
				onChange={handleChange}
				placeholder="Ingresar mensaje"
				startContent={<AiOutlineUser />}
				maxLength={40}
				isLabelCounter
			/>
			<TextArea
				name="message2"
				value={values.message2}
				onChange={handleChange}
				placeholder="Ingresar mensaje"
				startContent={<AiFillApi />}
				maxLength={40}
			/>
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
