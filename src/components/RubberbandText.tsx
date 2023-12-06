import { createElement } from "react";
import RubberbandLetter from "./RubberbandLetter";

type RubberbandTextProps = {
	text: string;
	tag: string;
	className?: string;
};

const RubberbandText = ({
	tag,
	text,
	className = undefined,
}: RubberbandTextProps) => {
	const txt = text.split(" ").map((word, index) => (
		<p key={index} className="inline">
			{word.split("").map((letter, letterIndex) => (
				<RubberbandLetter key={letterIndex} letter={letter} />
			))}
		</p>
	));

	const el = createElement(tag, { className }, ...txt);

	return el;
};

export default RubberbandText;
