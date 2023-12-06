import CodeBlock from "@/components/CodeBlock";
import CodeTag from "@/components/CodeTag";
import Molecule3D from "@/components/Molecule3D";
import RubberbandText from "@/components/RubberbandText";
import { getSkills, shuffleArray } from "@/lib/utils";

const page = () => {
	const skills = shuffleArray(getSkills());

	return (
		<main className="flex-grow">
			{/* Padding bottom = navbar height */}
			<div
				className="flex flex-col justify-between w-full h-full lg:!max-h-full p-2 sm:p-4 md:p-6 lg:p-8 max-w-5xl overflow-y-hidden"
				style={{ maxHeight: "calc(100% - 56px)" }}
			>
				<div>
					<CodeTag>{"<html>"}</CodeTag>
					<br />
					<CodeTag className="ml-3">{"<body>"}</CodeTag>
				</div>

				<div className="flex flex-wrap">
					<div>
						<div className="py-4 ml-6 w-max">
							<CodeBlock tag="h1" variant="top-left-bottom-right">
								<RubberbandText
									tag="h2"
									text="About Me"
									className="flex flex-wrap gap-2 ml-2 text-4xl font-black min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
								/>
							</CodeBlock>
						</div>

						<div className="w-[90%] max-w-2xl pl-6">
							<CodeBlock tag="p" variant="top-left-bottom-right">
								<p className="ml-2">
									🚀 Hello, I&apos;m{" "}
									<span className="font-bold">
										Rangga Buana Saputra
									</span>
									, an emerging Fullstack Developer with a
									passion for converting thoughts to digital
									experiences.
									<br />
									<br />
									In the world of web development I navigate
									with enthusiasm from front end aesthetics to
									backend functionality.
									<br />
									<br />
									I&apos;m eager to work together and bring
									innovative projects to life! 💻✨
								</p>
							</CodeBlock>
						</div>
					</div>

					<div className="flex items-center justify-center flex-grow">
						<div className="py-8 h-max">
							<Molecule3D
								initSpeed="fast"
								maxSpeed="fast"
								radius={1}
							>
								{skills}
							</Molecule3D>
						</div>
					</div>
				</div>

				{/* Last element must have padding bottom to give extra space */}
				<div className="pb-14 lg:pb-0">
					<CodeTag className="ml-3">{"</body>"}</CodeTag>
					<br />
					<CodeTag>{"</html>"}</CodeTag>
				</div>
			</div>
		</main>
	);
};

export default page;
