import { CodeShared } from "../../../shared/components";
import { Layout } from "../../../shared/layout/layout";
import {
	ConfirmatioClose,
	ConfirmationBody,
	ConfirmationBodyData,
	ConfirmationDefault,
	ConfirmationFooter,
	ConfirmationHeader,
} from "./components";

export const ConfirmationPage = () => {
	return (
		<Layout>
			<h1 className="text-4xl mb-4" id="import">
				Accordion
			</h1>
			<h2 className="text-2xl" id="import">
				Import
			</h2>

			<CodeShared>{`import { Confirmation } from "@jose-ureta/ju-ui";`}</CodeShared>

			<ConfirmationDefault />
			<ConfirmationHeader />
			<ConfirmatioClose />
			<ConfirmationBody />
			<ConfirmationBodyData />
			<ConfirmationFooter />
		</Layout>
	);
};
