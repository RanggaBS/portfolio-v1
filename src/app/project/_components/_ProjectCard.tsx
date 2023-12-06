import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { Project } from "@/models/project";

type ProjectCardProps = Project;

const ProjectCard = ({
	title,
	imgSrc,
	description,
	techStack,
	githubRepoUrl,
	demoUrl,
}: ProjectCardProps) => {
	return (
		<article>
			<div
				className={cn(
					"h-full",
					"rounded-xl",
					"bg-zinc-200 dark:bg-zinc-800",
					"text-zinc-900 dark:text-zinc-100",
					"border border-zinc-900 dark:border-zinc-10"
				)}
			>
				<Image
					src={imgSrc}
					alt={title}
					width={1000}
					height={1000}
					className="block object-cover w-full"
				/>

				{/* Content */}
				<div>
					{/* Text content */}
					<div className="p-2 border-b border-zinc-900 dark:border-zinc-100">
						<div className="flex flex-col justify-between">
							<h2 className="pb-4 text-2xl font-bold">{title}</h2>

							<p>{description}</p>
						</div>

						<ul className="flex flex-wrap pt-6 font-semibold gap-x-1">
							Tools:
							{techStack
								.join(", ")
								.split(" ")
								.map(tech => (
									<li key={tech} className="font-normal">
										{tech}
									</li>
								))}
						</ul>
					</div>

					{/* Link */}
					<div className="flex items-center justify-end p-2">
						{githubRepoUrl && (
							<Link
								href={githubRepoUrl}
								className="flex items-center gap-2 hover:underline"
							>
								GitHub <Icon icon={<LuExternalLink />} />
							</Link>
						)}

						{demoUrl && (
							<Link
								href={demoUrl}
								className="flex items-center gap-2 hover:underline"
							>
								Demo <Icon icon={<LuExternalLink />} />
							</Link>
						)}
					</div>
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
