import { CodeShared } from "../../shared/components";
import { Layout } from "../../shared/layout/layout";
import {
	ChipColor,
	ChipDefault,
	ChipDisabled,
	ChipRadius,
	ChipSize,
	ChipVariant,
} from "./components";

export const ChipPage = () => {
	return (
		<Layout>
			<h1 className="text-4xl mb-4" id="import">
				Chip
			</h1>
			<h2 className="text-2xl" id="import">
				Import
			</h2>

			<CodeShared>{`import { Chip } from "@jose-ureta/ju-ui";`}</CodeShared>

			<ChipDefault />
			<ChipSize />
			<ChipRadius />
			<ChipColor />
			<ChipVariant />
			<ChipDisabled />
		</Layout>
	);
};
