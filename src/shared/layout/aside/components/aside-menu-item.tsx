import { NavLink, useNavigate } from "react-router-dom";
import { AsideDataMenuItemProps } from "../interface/aside.interface";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useMitt } from "../../../hooks/use-mitt";

interface Props {
	el: AsideDataMenuItemProps;
}

export const AsideMenuItem = ({ el }: Props) => {
	const { emitter } = useMitt();
	const navigate = useNavigate();

	const handleClick = (to: string) => {
		emitter.emit("isMenu", false);
		document
			.getElementsByTagName("body")[0]
			.classList.remove("overflow-hidden");
		navigate(to);
	};

	return (
		<NavLink
			to={el.path}
			className="flex items-center gap-x-2 py-2  w-full"
			onClick={(e) => {
				e.preventDefault();
				handleClick(el.path);
			}}
		>
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
