import { CodeShared } from "../../shared/components";
import { Layout } from "../../shared/layout/layout";
import {
	RadioDefault,
	ToggleColor,
	ToggleDisabled,
	ToggleLabelPosition,
	ToggleSize,
	ToggleState,
} from "./components";
import { ToggleLabel } from "./components/toggle-label";

export const TogglePage = () => {
	return (
		<Layout>
			<div className="col-span-8">
				<h1 className="text-4xl mb-4" id="import">
					Toggle
				</h1>
				<h2 className="text-2xl" id="import">
					Import
				</h2>

				<CodeShared>{`import { Toggle } from "@jose-ureta/ju-ui";`}</CodeShared>

				<RadioDefault />
				<ToggleSize />
				<ToggleColor />
				<ToggleLabel />
				<ToggleLabelPosition />
				<ToggleDisabled />
				<ToggleState />
			</div>
		</Layout>
	);
};
