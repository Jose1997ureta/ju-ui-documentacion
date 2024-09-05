import { Card, ExcludeType, SizeProps, TextArea } from "@jose-ureta/ju-ui";

import { useTab } from "../../../shared/hooks/use-tab";
import { TabShared, CodeShared } from "../../../shared/components";
import { useFormik } from "formik";

const size = ["sm", "md", "lg"] as ExcludeType<SizeProps, "xs">[];

export const TextAreaSize = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const { values, handleChange } = useFormik({
		initialValues: {
			sm: "",
			md: "",
			lg: "",
		},
		onSubmit: () => {},
	});

	return (
		<div className="mt-4" id="size">
			<h3 className="text-xl">Size</h3>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="grid sm:grid-cols-2 gap-3 md:grid-cols-3">
							{size.map((el) => (
								<div key={el}>
									<TextArea
										size={el}
										value={values[el]}
										placeholder="Ingresar mensaje"
										onChange={handleChange}
										name={el}
									/>
								</div>
							))}
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { useFormik } from "formik";
import { ExcludeType, SizeProps, TextArea } from "@jose-ureta/ju-ui";
import { useFormik } from "formik";

const size = ["sm", "md", "lg"] as ExcludeType<SizeProps, "xs">[];

const App = () => {
	const { values, handleChange } = useFormik({
		initialValues: {
			sm: "",
			md: "",
			lg: "",
		},
		onSubmit: () => {},
	});
	return (
		<div className="grid sm:grid-cols-2 gap-3 md:grid-cols-3">
			{size.map((el) => (
				<div key={el}>
					<TextArea
						name={el}
						size={el}
						value={values[el]}
						placeholder="Ingresar mensaje"
						onChange={handleChange}
					/>
				</div>
			))}
		</div>
	)
}`}
				</CodeShared>
			) : null}
		</div>
	);
};
