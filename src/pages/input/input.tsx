import { CodeShared } from "../../shared/components";
import { Layout } from "../../shared/layout/layout";
import { InputDefault } from "./components/input-default";
import { InputDisabled } from "./components/input-disabled";
import { InputIcon } from "./components/input-icon";
import { InputLabel } from "./components/input-label";
import { InputPattern } from "./components/input-pattern";
import { InputSize } from "./components/input-size";
import { InputState } from "./components/input-state";

export const InputPage = () => {
	return (
		<Layout>
			<div className="col-span-8">
				<h1 className="text-4xl mb-4" id="import">
					Input
				</h1>
				<h2 className="text-2xl" id="import">
					Import
				</h2>

				<CodeShared>{`import { Input } from "@jose-ureta/ju-ui";`}</CodeShared>

				<InputDefault />
				<InputSize />
				<InputLabel />
				<InputIcon />
				<InputDisabled />
				<InputPattern />
				<InputState />
			</div>
		</Layout>
	);
};
