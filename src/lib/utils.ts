import { ClassValue, clsx } from "clsx";
import { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

import _projects from "@/data/projects.json";
import _skills from "@/data/skills.json";
import { Project } from "@/models/project";

export const cn = (...inputs: ClassValue[]): string => {
	return twMerge(clsx(inputs));
};

export type CssPropertiesWithVariable = CSSProperties & {
	[key: `--${string}`]: string | number;
};

export const capitalizeFistLetter = (input: string): string => {
	return input.charAt(0).toUpperCase() + input.slice(1);
};

export const getSkills = () => {
	return _skills;
};

export const getProjects = () => {
	return _projects as Readonly<Project[]>;
};

export const headerClassName = [
	"flex flex-wrap gap-2",
	"font-black text-4xl",
	"min-[480px]:text-5xl sm:text-6xl md:text-7xl",
].join(" ");

export const shuffleArray = <T>(array: T[]): T[] => {
	const shuffledArray = [...array];

	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [
			shuffledArray[j],
			shuffledArray[i],
		];
	}

	return shuffledArray;
};
