import CodeTag from "@/components/CodeTag";
import _projects from "@/data/projects.json";
import { getProjects } from "@/lib/utils";

import ProjectArticle from "./_components/ProjectArticle";
import CodeBlock from "@/components/CodeBlock";
import RubberbandText from "@/components/RubberbandText";

const Page = () => {
	const projects = getProjects();

	return (
		<main className="flex-grow max-w-[100vw]">
			<div
				className="flex flex-col justify-between w-full h-full p-2 sm:p-4 md:p-6 lg:p-8"
				// style={{ maxHeight: "calc(100% - 56px)" }}
			>
				<div>
					<CodeTag>{"<html>"}</CodeTag>
					<br />
					<CodeTag className="ml-3">{"<body>"}</CodeTag>
				</div>

				<div>
					{/* Heading begin */}
					<div className="pt-4 pb-24 ml-6 w-max">
						<h1 className="sr-only">Rangga Buana Saputra</h1>

						{/* <CodeTag className="ml-6">{"<h1>"}</CodeTag>
						<h2 className="ml-8 leading-normal font-black text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl">
							My Projects
						</h2>
						<CodeTag className="ml-6">{"</h1>"}</CodeTag> */}
						<CodeBlock tag="h1" variant="top-left-bottom-right">
							<RubberbandText
								tag="h2"
								text="My Projects"
								className="flex flex-wrap gap-x-2 ml-2 text-4xl font-black min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
							/>
						</CodeBlock>
					</div>
					{/* Heading end */}

					{/* Projects begin */}
					{/* <div className="py-6 px-6 grid grid-cols-[repeat(auto-fill,_minmax(max(250px,_calc(100%_-_calc((2_-_1)_*_24px))_/_2),_1fr))] gap-6"> */}
					<div className="flex flex-col max-w-screen-lg gap-20 pb-4 mx-8">
						{projects.map((project, index) => (
							<ProjectArticle key={project.title} {...project} />
						))}
					</div>
					{/* Projects end */}
				</div>

				<div className="pb-16 lg:pb-0">
					<CodeTag className="ml-3">{"</body>"}</CodeTag>
					<br />
					<CodeTag>{"</html>"}</CodeTag>
				</div>
			</div>
		</main>
	);
};

export default Page;
