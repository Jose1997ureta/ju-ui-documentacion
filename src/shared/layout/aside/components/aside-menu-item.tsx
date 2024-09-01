import { NavLink } from "react-router-dom";
import { AsideDataMenuItemProps } from "../interface/aside.interface";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
	el: AsideDataMenuItemProps;
}

export const AsideMenuItem = ({ el }: Props) => {
	return (
		<NavLink to={el.path} className="flex items-center gap-x-2 py-2  w-full">
			{({ isActive }) => (
				<>
					<MdKeyboardArrowRight
						className={isActive ? "fill-primary-700" : "fill-text-800"}
					/>
					<span
						className={
							isActive ? "text-primary-700 font-medium" : "text-text-800"
						}
					>
						{el.name}
					</span>
				</>
			)}
		</NavLink>
	);
};
