import { CodeShared } from "../../shared/components";
import { Layout } from "../../shared/layout/layout";
import {
	CheckboxColor,
	CheckboxDefault,
	CheckboxDisabled,
	CheckboxLabel,
	CheckboxLabelPosition,
	CheckboxSize,
	CheckboxState,
} from "./components";

export const CheckBoxPage = () => {
	return (
		<Layout>
			<div className="col-span-8">
				<h1 className="text-4xl mb-4" id="import">
					CheckBox
				</h1>
				<h2 className="text-2xl" id="import">
					Import
				</h2>

				<CodeShared>{`import { CheckBox } from "@jose-ureta/ju-ui";`}</CodeShared>

				<CheckboxDefault />
				<CheckboxSize />
				<CheckboxColor />
				<CheckboxLabel />
				<CheckboxLabelPosition />
				<CheckboxDisabled />
				<CheckboxState />
			</div>
		</Layout>
	);
};
