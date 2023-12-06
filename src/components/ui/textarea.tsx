import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					"flex min-h-[80px] bg-zinc-50 dark:bg-zinc-900 w-full rounded-md border border-zinc-900 dark:border-zinc-100 px-3 py-2 text-sm ring-zinc-900 dark:ring-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Textarea.displayName = "Textarea";

export { Textarea };
