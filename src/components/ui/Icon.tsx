import { cloneElement, ReactElement } from "react";
import { IconContext } from "react-icons";

export type IconProps = IconContext & {
	icon: ReactElement;
};

const Icon = ({ icon, ...props }: IconProps) => {
	return cloneElement(icon, { ...props });
};

export default Icon;
