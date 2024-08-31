import { CodeShared } from "../../shared/components";
import { Layout } from "../../shared/layout/layout";
import {
	RadioColor,
	RadioDefault,
	RadioDisabled,
	RadioLabel,
	RadioLabelPosition,
	RadioSize,
	RadioState,
} from "./components";

export const RadioPage = () => {
	return (
		<Layout>
			<div className="col-span-8">
				<h1 className="text-4xl mb-4" id="import">
					Radio
				</h1>
				<h2 className="text-2xl" id="import">
					Import
				</h2>

				<CodeShared>{`import { Radio } from "@jose-ureta/ju-ui";`}</CodeShared>

				<RadioDefault />
				<RadioSize />
				<RadioColor />
				<RadioLabel />
				<RadioLabelPosition />
				<RadioDisabled />
				<RadioState />
			</div>
		</Layout>
	);
};
