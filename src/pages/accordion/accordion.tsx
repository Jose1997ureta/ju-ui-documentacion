import { CodeShared } from "../../shared/components";
import { Layout } from "../../shared/layout/layout";
import {
	AccordionActiveKeys,
	AccordionColor,
	AccordionCustomStyle,
	AccordionData,
	AccordionDataCustom,
	AccordionDefault,
	AccordionDisabledKeys,
	AccordionHeaderContent,
	AccordionLoading,
	AccordionMultiple,
	AccordionRadius,
} from "./components";

export const AccordionPage = () => {
	return (
		<Layout>
			<div className="col-span-8">
				<h1 className="text-4xl mb-4" id="import">
					Accordion
				</h1>
				<h2 className="text-2xl" id="import">
					Import
				</h2>

				<CodeShared>{`import { Accordion } from "@jose-ureta/ju-ui";`}</CodeShared>

				<AccordionDefault />
				<AccordionMultiple />
				<AccordionActiveKeys />
				<AccordionDisabledKeys />
				<AccordionColor />
				<AccordionRadius />
				<AccordionData />
				<AccordionDataCustom />
				<AccordionLoading />
				<AccordionHeaderContent />
				<AccordionCustomStyle />
			</div>
		</Layout>
	);
};
