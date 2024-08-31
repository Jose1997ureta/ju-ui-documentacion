import { CodeShared } from "../../shared/components";
import { Layout } from "../../shared/layout/layout";
import {
	TextAreaDefault,
	TextAreaDisabled,
	TextAreaIcon,
	TextAreaSize,
	TextAreaCounter,
	TextAreaState,
} from "./components/";

export const TextAreaPage = () => {
	return (
		<Layout>
			<div className="col-span-8">
				<h1 className="text-4xl mb-4" id="import">
					TextArea
				</h1>

				<h2 className="text-2xl" id="import">
					Import
				</h2>

				<CodeShared>{`import { TextArea } from "@jose-ureta/ju-ui";`}</CodeShared>

				<TextAreaDefault />
				<TextAreaSize />
				<TextAreaIcon />
				<TextAreaDisabled />
				<TextAreaCounter />
				<TextAreaState />
			</div>
		</Layout>
	);
};
