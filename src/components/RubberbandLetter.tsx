"use client";

import { cn } from "@/lib/utils";
import { AnimationEvent, HTMLAttributes, MouseEvent } from "react";

type RubberbandLetterProps = HTMLAttributes<HTMLSpanElement> & {
	letter: string;
};

const RubberbandLetter = ({
	letter,
	className = "",
	...props
}: RubberbandLetterProps) => {
	/* const handleHover = () => {
		return (event: MouseEvent<HTMLSpanElement, MouseEvent>) => {
			const el = event.target as HTMLSpanElement;
			el.classList.add("bouncing");
		};
	}; */

	const handleAnimationEnd = (event: AnimationEvent<HTMLSpanElement>) => {
		const el = event.target as HTMLSpanElement;
		el.classList.remove("bouncing");
	};

	return (
		<span
			{...props}
			className={cn(
				"inline-block",
				className /* , {
				"w-[0.5em]": letter === " ",
			} */
			)}
			onMouseEnter={(event) => {
				const el = event.target as HTMLSpanElement;
				el.classList.add("bouncing");
			}}
			onAnimationEnd={handleAnimationEnd}
		>
			{letter}
		</span>
	);
};

export default RubberbandLetter;
