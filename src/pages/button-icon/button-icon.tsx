import { CodeShared } from "../../shared/components";
import { Layout } from "../../shared/layout/layout";
import {
	ButtonIconColor,
	ButtonIconDefault,
	ButtonIconDisabled,
	ButtonIconLoading,
	ButtonIconRadius,
	ButtonIconSize,
	ButtonIconVariant,
} from "./components";

export const ButtonIconPage = () => {
	return (
		<Layout>
			<div className="col-span-8">
				<h1 className="text-4xl mb-4" id="import">
					Button Icon
				</h1>
				<h2 className="text-2xl" id="import">
					Import
				</h2>

				<CodeShared>{`import { ButtonIcon } from "@jose-ureta/ju-ui";`}</CodeShared>

				<ButtonIconDefault />
				<ButtonIconSize />
				<ButtonIconRadius />
				<ButtonIconColor />
				<ButtonIconVariant />
				<ButtonIconDisabled />
				<ButtonIconLoading />
			</div>
		</Layout>
	);
};
