import { CodeShared } from "../../shared/components";
import { Layout } from "../../shared/layout/layout";
import {
	AvatarBorder,
	AvatarCustom,
	AvatarDefault,
	AvatarDisabled,
	AvatarItemGroup,
	AvatarName,
	AvatarRadius,
	AvatarSize,
	AvatarStatus,
} from "./components";

export const AvatarPage = () => {
	return (
		<Layout>
			<div className="col-span-8">
				<h1 className="text-4xl mb-4" id="import">
					Avatar
				</h1>
				<h2 className="text-2xl" id="import">
					Import
				</h2>

				<CodeShared>{`import { Avatar } from "@jose-ureta/ju-ui";`}</CodeShared>

				<AvatarDefault />
				<AvatarSize />
				<AvatarRadius />
				<AvatarName />
				<AvatarBorder />
				<AvatarStatus />
				<AvatarDisabled />
				<AvatarCustom />
				<AvatarItemGroup />
			</div>
		</Layout>
	);
};
