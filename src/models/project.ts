export type Project = Readonly<{
	title: string;
	imgSrc: string;
	description: string;
	techStack: string[];
	githubRepoUrl: string | null;
	demoUrl?: string | null;
}>;
