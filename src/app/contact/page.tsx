import CodeTag from "@/components/CodeTag";
import RubberbandLetter from "@/components/RubberbandLetter";

import ContactForm from "./_components/ContactForm";
import CodeBlock from "@/components/CodeBlock";

const Page = () => {
	const header = "Contact Me";

	return (
		<main className="flex-grow">
			<div
				className="flex flex-col justify-between w-full h-full lg:!max-h-full p-2 sm:p-4 md:p-6 lg:p-8 max-w-5xl overflow-y-hidden"
				style={{ maxHeight: "calc(100% - 56px)" }}
			>
				<div>
					<CodeTag>{"<html>"}</CodeTag>
					<br />
					<CodeTag className="ml-3">{"<body>"}</CodeTag>
				</div>

				<div className="space-y-4">
					{/* h1 begin */}
					<div className="pt-4">
						<h1 className="sr-only">Rangga Buana Saputra</h1>

						<div className="w-max">
							<CodeTag className="ml-6">{"<h1>"}</CodeTag>

							<h2 className="flex gap-2 flex-wrap ml-8 font-black text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
								{header.split(" ").map((text, textIndex) => (
									<p key={textIndex} className="inline">
										{text
											.split("")
											.map((letter, letterIndex) => (
												<RubberbandLetter
													key={letterIndex}
													letter={letter}
												/>
											))}
									</p>
								))}
							</h2>

							<CodeTag className="block -mr-2 text-end">
								{"</h1>"}
							</CodeTag>
						</div>
					</div>
					{/* h1 end */}

					{/* Description begin */}
					<div className="max-w-lg mx-6">
						<CodeBlock tag="p" variant="top-left-bottom-right">
							<p className="ml-2">
								Thank you for visiting my portfolio page! 🎉
								<br />
								If you have any questions, have a new
								interesting project or collaboration, or if you
								just want to talk, don&apos;t hesitate to
								contact me.
							</p>
						</CodeBlock>
					</div>
					{/* Description end */}

					{/* Form begin */}
					<div className="mr-6">
						<CodeTag className="ml-6">{"<form>"}</CodeTag>

						<ContactForm />

						<CodeTag className="ml-6">{"</form>"}</CodeTag>
					</div>
					{/* Form end */}
				</div>

				<div className="pb-14 lg:pb-0">
					<CodeTag className="ml-3">{"</body>"}</CodeTag>
					<br />
					<CodeTag>{"</html>"}</CodeTag>
				</div>
			</div>
		</main>
	);
};

export default Page;
