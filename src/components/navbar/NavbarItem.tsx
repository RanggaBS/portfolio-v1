"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { resolve } from "url";

import { cn } from "@/lib/utils";

import Icon from "../ui/Icon";

export type NavbarItemProps = {
	icon: JSX.Element;
	href: string;
	label?: string;
	linkProps?: HTMLAttributes<HTMLAnchorElement>;
	iconProps?: IconContext;
};

const NavbarItem = ({
	icon,
	href,
	label,
	linkProps,
	iconProps,
}: NavbarItemProps) => {
	const pathname = usePathname();
	const [isCurrentPath, setIsCurrentPath] = useState(false);

	useEffect(() => {
		const normalizedPathname = resolve("/", pathname);
		const normalizedHref = resolve("/", href);

		setIsCurrentPath(normalizedPathname === normalizedHref);
	}, [pathname, href]);

	return (
		<Link
			{...linkProps}
			href={href}
			className={cn(
				"flex flex-col items-center justify-center p-2 text-center transition-all gap-y-2 text-zinc-100 active:bg-stone-800",
				{ "bg-zinc-700": isCurrentPath }
			)}
		>
			<Icon
				{...iconProps}
				icon={icon}
				className={cn("w-6 h-6 lg:w-8 lg:h-8 mx-auto", {
					"scale-125": isCurrentPath,
				})}
			/>

			{isCurrentPath && (
				<span
					className={cn(
						"text-[8px] lg:text-[12px] leading-none font-medium",
						{ hidden: !isCurrentPath }
					)}
					aria-label={label}
				>
					{label}
				</span>
			)}
		</Link>
	);
};

export default NavbarItem;
