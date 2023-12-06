import { createElement, ReactNode } from "react";
import CodeTag from "./CodeTag";

type CodeBlockProps = {
	tag: string;
	variant: "top-n-bottom-left" | "top-left-bottom-right";
	children?: ReactNode;
};

const CodeBlock = ({ variant, tag, children }: CodeBlockProps) => {
	const closingTagClassName =
		variant === "top-left-bottom-right"
			? "block -mr-2 text-end"
			: undefined;

	// const OpeningTag = createElement(tag, {}, `<${tag}>`);
	// const ClosingTag = createElement(
	// 	tag,
	// 	{ className: closingTagClassName },
	// 	`</${tag}>`
	// );
	const OpeningTag = () => <CodeTag>{`<${tag}>`}</CodeTag>;
	const ClosingTag = () => (
		<CodeTag className={closingTagClassName}>{`</${tag}>`}</CodeTag>
	);

	return (
		<>
			<OpeningTag />

			{children}

			<ClosingTag />
		</>
	);
};

export default CodeBlock;
