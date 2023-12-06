import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const Badge = ({
	className,
	children,
	...props
}: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			{...props}
			className={cn(
				"bg-slate-800 text-sm font-medium rounded-full px-3 py-1 text-zinc-100",
				className
			)}
		>
			{children}
		</span>
	);
};

export default Badge;
