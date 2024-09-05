import {
	Card,
	ExcludeType,
	Input,
	LabelForm,
	SizeProps,
} from "@jose-ureta/ju-ui";

import { useTab } from "../../../shared/hooks/use-tab";
import { TabShared, CodeShared } from "../../../shared/components";

export const InputSize = () => {
	const { handleChangeTab, keyCurrent } = useTab();

	const size = ["sm", "md", "lg"] as ExcludeType<SizeProps, "xs">[];

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
									<LabelForm label="Nombre" />
									<Input size={el} placeholder="Ingresar nombre" />
								</div>
							))}
						</div>
					</Card.Body>
				</Card>
			) : null}

			{keyCurrent === "code" ? (
				<CodeShared>
					{`import { ExcludeType, SizeProps, Input } from "@jose-ureta/ju-ui";

const App = () => {
	const size = ["sm", "md", "lg"] as ExcludeType<SizeProps, "xs">[];

	return (
		<div className="grid sm:grid-cols-2 gap-3 md:grid-cols-3">
			{size.map((el) => (
				<div key={el}>
					<LabelForm label="Nombre" />
					<Input size={el} placeholder="Ingresar nombre" />
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
