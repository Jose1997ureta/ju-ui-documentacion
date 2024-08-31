import { CodeShared } from "../../shared/components";
import { Layout } from "../../shared/layout/layout";
import {
	ButtonColor,
	ButtonCustoms,
	ButtonDefault,
	ButtonDisabled,
	ButtonLoading,
	ButtonSize,
	ButtonVariant,
	ButtonWithIcon,
} from "./components";

export const ButtonPage = () => {
	return (
		<Layout>
			<div className="col-span-8">
				<h1 className="text-4xl mb-4" id="import">
					Button
				</h1>
				<h2 className="text-2xl" id="import">
					Import
				</h2>

				<CodeShared>{`import { Button } from "@jose-ureta/ju-ui";`}</CodeShared>

				<ButtonDefault />
				<ButtonSize />
				<ButtonColor />
				<ButtonVariant />
				<ButtonWithIcon />
				<ButtonDisabled />
				<ButtonLoading />
				<ButtonCustoms />
			</div>
		</Layout>
	);
};
