import Image from "next/image";

import CodeBlock from "@/components/CodeBlock";
import Badge from "@/components/ui/Badge";
import { Project } from "@/models/project";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { LuExternalLink } from "react-icons/lu";

const ProjectArticle = ({
	title,
	imgSrc,
	description,
	techStack,
	demoUrl,
	githubRepoUrl,
}: Project) => {
	return (
		<article>
			<div className="flex flex-col flex-wrap items-center justify-end gap-12 md:flex-row-reverse">
				<div className="flex items-center justify-center pl-2">
					<Image
						src={imgSrc}
						alt={title}
						width={400}
						height={300}
						className="object-contain w-full min-w-[150px] max-w-[400px]"
					/>
				</div>

				<div className="flex flex-col justify-between max-w-lg">
					<div className="pb-4">
						<CodeBlock tag="h2" variant="top-left-bottom-right">
							<h3 className="font-bold px-2 text-2xl min-[480px]:text-3xl">
								{title}
							</h3>
						</CodeBlock>

						<CodeBlock tag="p" variant="top-left-bottom-right">
							<p className="px-2">{description}</p>
						</CodeBlock>
					</div>

					<div className="pb-4">
						<ul className="flex flex-wrap gap-2">
							<h4 className="sr-only">Tools: </h4>
							{techStack.map((tool) => (
								<li key={tool} className="inline">
									<Badge>{tool}</Badge>
								</li>
							))}
						</ul>
					</div>

					<div className="flex justify-end text-sm gap-x-6">
						{githubRepoUrl && (
							<Link
								href={githubRepoUrl}
								className="flex items-center gap-x-2 hover:underline"
								target="_blank"
							>
								GitHub <Icon icon={<LuExternalLink />} />
							</Link>
						)}

						{demoUrl && (
							<Link
								href={demoUrl}
								className="flex items-center gap-x-2 hover:underline"
								target="_blank"
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

export default ProjectArticle;
