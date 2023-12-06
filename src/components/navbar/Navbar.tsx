import { FiPhone } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";

import Wrapper from "../layout/Wrapper";
import NavbarItem, { NavbarItemProps } from "./NavbarItem";

const Navbar = () => {
	const links: NavbarItemProps[] = [
		{ icon: <GoHome />, href: "/", label: "Home" },
		{ icon: <IoPersonOutline />, href: "/about", label: "About" },
		{ icon: <HiOutlineSquares2X2 />, href: "/project", label: "Project" },
		{ icon: <FiPhone />, href: "/contact", label: "Contact" },
	];

	return (
		<nav className="fixed bottom-0 z-10 w-full bg-zinc-900 dark:bg-zinc-800 lg:static lg:w-[72px]">
			<Wrapper className="flex justify-evenly lg:fixed lg:w-[inherit] lg:flex-col lg:h-screen lg:p-0">
				{links.map(link => (
					<NavbarItem key={link.href} {...link} />
				))}
			</Wrapper>
		</nav>
	);
};

export default Navbar;
