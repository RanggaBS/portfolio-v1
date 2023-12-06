"use client";

import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";

type Molecule3DProps = TagCloudOptions & {
	children: string[];
};

const Molecule3D = ({ children, ...props }: Molecule3DProps) => {
	return <TagCloud {...props}>{children}</TagCloud>;
};

export default Molecule3D;
