import { cva, VariantProps } from "class-variance-authority";
import {
	ButtonHTMLAttributes,
	ForwardedRef,
	forwardRef,
	HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
	"font-semibold rounded-lg transition-all border",
	{
		variants: {
			variant: {
				primary: `border-zinc-900 dark:border-zinc-100
					bg-zinc-900 hover:bg-transparent dark:bg-zinc-100 dark:hover:bg-transparent  
					text-zinc-100 hover:text-zinc-900 dark:text-zinc-900 dark:hover:text-zinc-100`,
				secondary: `border-zinc-900 dark:border-zinc-100
					bg-transparent hover:bg-zinc-900 dark:hover:bg-zinc-100
					text-zinc-900 hover:text-zinc-100 dark:text-zinc-100 dark:hover:text-zinc-900`,
			},
			size: {
				sm: "px-3 py-2 text-sm",
				md: "px-5 py-2",
				lg: "px-6 py-3",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	}
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ variant, size, className, children, ...props }: ButtonProps,
		ref: ForwardedRef<HTMLButtonElement>
	) => {
		return (
			<button
				ref={ref}
				className={cn(buttonVariants({ variant, size, className }))}
				{...props}
			>
				{children}
			</button>
		);
	}
);
Button.displayName = "Button";

export default Button;
