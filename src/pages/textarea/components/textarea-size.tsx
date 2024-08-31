import { Card, ExcludeType, SizeProps, TextArea } from "@jose-ureta/ju-ui";

import { useTab } from "../../../shared/hooks/use-tab";
import { TabShared, CodeShared } from "../../../shared/components";

export const TextAreaSize = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const size = ["sm", "md", "lg"] as ExcludeType<SizeProps, "xs">[];

	return (
		<div className="mt-4" id="size">
			<h3 className="text-xl">Size</h3>
			<TabShared keyCurrent={keyCurrent} handleChangeTab={handleChangeTab} />

			{keyCurrent === "preview" ? (
				<Card className="mt-4">
					<Card.Body className="border rounded-md">
						<div className="flex gap-x-4">
							{size.map((el) => (
								<div className="w-1/3" key={el}>
									<TextArea size={el} placeholder="Ingresar mensaje" />
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

const App = () => {
	const size = ["sm", "md", "lg"] as ExcludeType<SizeProps, "xs">[];

	return (
		<div className="flex items-center gap-x-4">
			{size.map((el) => (
				<div className="w-1/3" key={el}>
					<TextArea size={el} placeholder="Ingresar mensaje" />
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
