"use client";

import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import { GoCheck, GoMoon, GoSun } from "react-icons/go";

import { capitalizeFistLetter } from "@/lib/utils";
import { PopoverClose } from "@radix-ui/react-popover";

import Icon, { IconProps } from "./ui/Icon";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type Theme = "light" | "dark" | "system";

const ButtonTheme = ({
	onClick,
	children,
}: {
	onClick: () => void;
	children: ReactNode;
}) => {
	return (
		<PopoverClose
			type="button"
			onClick={onClick}
			className="flex items-center justify-between w-full p-2 rounded hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-start"
		>
			{children}
		</PopoverClose>
	);
};

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const handleClick = (theme: Theme) => {
		setTheme(theme);
	};

	const themes: Theme[] = ["light", "dark", "system"];

	const ThemeIcon = ({ ...props }: Omit<IconProps, "icon">) => {
		const icon = resolvedTheme === "dark" ? <GoMoon /> : <GoSun />;

		return <Icon icon={icon} {...props} />;
	};

	return (
		<Popover>
			<PopoverTrigger className="fixed flex items-center p-2 text-sm transition-colors rounded-md gap-x-2 right-4 top-2 hover:bg-zinc-200 dark:hover:bg-zinc-800">
				<ThemeIcon size="24px" /> Theme
			</PopoverTrigger>

			<PopoverContent className="flex flex-col items-start w-32 p-2 text-sm border border-black dark:border-white bg-zinc-100 dark:bg-zinc-900 gap-y-1">
				{themes.map((t) => (
					<ButtonTheme key={t} onClick={() => handleClick(t)}>
						<p>{capitalizeFistLetter(t)}</p>

						{t === theme && <Icon icon={<GoCheck />} />}
					</ButtonTheme>
				))}
			</PopoverContent>
		</Popover>
	);
};

export default ThemeToggle;
