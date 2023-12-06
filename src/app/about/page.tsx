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
						{/* <div className="py-4 w-max">
							<CodeTag className="ml-6">{"<h1>"}</CodeTag>

							<h1 className="sr-only">Rangga Buana Saputra</h1>
							<h2 className="ml-8 text-4xl font-black min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
								About Me
							</h2>
							
							<CodeTag className="block -mr-2 text-end">
							{"</h1>"}
							</CodeTag>
						</div> */}
						<div className="py-4 ml-6 w-max">
							<CodeBlock tag="h1" variant="top-left-bottom-right">
								{/* <h2 className="ml-2 text-4xl font-black min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
									About Me
								</h2> */}
								<RubberbandText
									tag="h2"
									text="About Me"
									className="flex flex-wrap gap-2 ml-2 text-4xl font-black min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
								/>
							</CodeBlock>
						</div>

						<div className="w-4/5 max-w-2xl pl-6">
							{/* <CodeTag className="ml-6">{"<p>"}</CodeTag> */}
							{/* <p className="ml-8">
							🚀 Hello there, my name is{" "}
							<span className="font-bold">
								Rangga Buana Saputra
							</span>
							, and I&apos;m a new full-stack web developer who
							enjoys creating dynamic and user-friendly digital
							experiences.
							<br />
							I&apos;m interested in both front-end magic and
							back-end logic, and I&apos;m proficient in HTML,
							CSS, and JavaScript. Eager to contribute to unique
							projects and learn new things on a daily basis.
							<br />
							<br />
							Let&apos;s collaborate to code the future! 💻✨
						</p> */}
							{/* <p className="ml-8">
								🚀 Hello, I&apos;m{" "}
								<span className="font-bold">
									Rangga Buana Saputra
								</span>
								, an emerging Fullstack Developer with a passion
								for converting thoughts to digital experiences.
								<br />
								<br />
								In the world of web development I navigate with
								enthusiasm from front end aesthetics to backend
								functionality.
								<br />
								<br />
								I&apos;m eager to work together and bring
								innovation projects to life! 💻✨
							</p> */}
							{/* <CodeTag className="block -mr-2 text-end">
								{"</p>"}
							</CodeTag> */}
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
									innovation projects to life! 💻✨
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

				{/* Last element must have padding bottom */}
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
