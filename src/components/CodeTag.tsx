import { JetBrains_Mono } from "next/font/google";
import { HTMLAttributes } from "react";

const font = JetBrains_Mono({ subsets: ["latin"] });

type CodeTagProps = HTMLAttributes<HTMLSpanElement>;

const CodeTag = ({ className = "", children, ...props }: CodeTagProps) => {
	return (
		<span
			{...props}
			className={`${font.className} text-sm !italic ${className}`}
		>
			{children}
		</span>
	);
};

export default CodeTag;
