import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type WrapperProps = HTMLAttributes<HTMLDivElement>;

const Wrapper = ({ className = "", children, ...props }: WrapperProps) => {
	return (
		<div
			{...props}
			className={cn("max-w-7xl mx-auto px-4 sm:px-8", className)}
		>
			{children}
		</div>
	);
};

export default Wrapper;
