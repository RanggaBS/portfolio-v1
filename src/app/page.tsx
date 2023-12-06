import Link from "next/link";

import CodeBlock from "@/components/CodeBlock";
import CodeTag from "@/components/CodeTag";
import RubberbandText from "@/components/RubberbandText";
import { buttonVariants } from "@/components/ui/Button";
import { cn, CssPropertiesWithVariable } from "@/lib/utils";

const Page = () => {
	const headers = ["Hi!", "I'm Rangga Buana Saputra"];

	return (
		<main className="flex-grow">
			<div
				className="flex flex-col justify-between w-full h-full p-2 sm:p-4 md:p-6 lg:p-8"
				style={{ maxHeight: "calc(100% - 56px)" }}
			>
				<div>
					<CodeTag>{"<html>"}</CodeTag>
					<br />
					<CodeTag className="ml-3">{"<body>"}</CodeTag>
				</div>

				<div className="flex flex-row-reverse flex-wrap items-center justify-end py-4">
					{/* Picture */}
					<div className="flex ml-6 h-max items-center min-w-min w-[35%]">
						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 500 500"
							width="100%"
							id="blobSvg"
							style={{ opacity: 1 }}
							className="min-h-[200px] max-h-[360px] min-w-[200px] max-w-[360px]"
						>
							<image
								x="0"
								y="0"
								width="100%"
								height="100%"
								clipPath="url(#shape)"
								href="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
								preserveAspectRatio="none"
							></image>{" "}
							<defs>
								{" "}
								<linearGradient
									id="gradient"
									x1="0%"
									y1="0%"
									x2="0%"
									y2="100%"
								>
									{" "}
									<stop
										offset="0%"
										style={
											{
												stopColor: "rgb(162, 125, 78)",
												"--darkreader-inline-stopcolor":
													"#ebc594",
											} as CssPropertiesWithVariable
										}
										data-darkreader-inline-stopcolor=""
									></stop>{" "}
									<stop
										offset="100%"
										style={
											{
												stopColor: "rgb(255, 0, 111)",
												"--darkreader-inline-stopcolor":
													"#ef639f",
											} as CssPropertiesWithVariable
										}
										data-darkreader-inline-stopcolor=""
									></stop>{" "}
								</linearGradient>{" "}
							</defs>{" "}
							<clipPath id="shape">
								<path id="blob" fill="url(#gradient)">
									{" "}
									<animate
										attributeName="d"
										dur="5000ms"
										repeatCount="indefinite"
										values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
									></animate>{" "}
								</path>
							</clipPath>
						</svg>
					</div>

					{/* Me */}
					<div className="max-w-screen-sm ml-10">
						{/* h1 begin */}
						<div className="pb-2 mr-6">
							<CodeBlock tag="h1" variant="top-left-bottom-right">
								<RubberbandText
									tag="p"
									text={headers[0]}
									className="ml-2 pb-2 font-extrabold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl"
								/>

								<RubberbandText
									tag="h1"
									text={headers[1]}
									className="flex flex-wrap gap-x-2 ml-2 font-black text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl"
								/>
							</CodeBlock>
						</div>
						{/* h1 end */}

						{/* p begin */}
						<div className="mr-6">
							<CodeBlock tag="p" variant="top-n-bottom-left">
								<p className="py-2 ml-2">
									🧑 Front-end & back-end developer,
									<br />
									based in Indonesia.
								</p>
							</CodeBlock>
						</div>
						{/* p end */}

						<Link
							href="/about"
							className={cn(
								"inline-block mt-4",
								buttonVariants({
									variant: "primary",
									size: "md",
								})
							)}
						>
							About Me
						</Link>
					</div>
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
