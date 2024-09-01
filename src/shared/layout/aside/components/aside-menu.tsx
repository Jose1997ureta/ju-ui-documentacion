import { useState } from "react";
import { AsideMenuItem } from "./aside-menu-item";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AsideDataMenuProps } from "../interface/aside.interface";
import clsx from "clsx";

interface Props {
	item: AsideDataMenuProps;
}

export const AsideMenu = ({ item }: Props) => {
	const [active, setActive] = useState<boolean>(true);

	const handleClick = () => {
		setActive((state) => !state);
	};

	return (
		<>
			<div
				className="flex items-center gap-x-3 p-2 cursor-pointer w-full"
				onClick={handleClick}
			>
				<p className="font-medium text-text-800">{item.name}</p>
				{active ? (
					<IoIosArrowUp className="fill-text-800" />
				) : (
					<IoIosArrowDown className="fill-text-800" />
				)}
			</div>
			<ul className={clsx("mt-2 px-4 w-full", active ? "block" : "hidden")}>
				{item.menu.map((el) => (
					<AsideMenuItem key={el.id} el={el} />
				))}
			</ul>
		</>
	);
};
