import type { Metadata } from "next";
import "@/styles/globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

import Theme from "@/components/Theme";
import Navbar from "@/components/navbar/Navbar";
import ThemeToggle from "@/components/ThemeToggle";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfolio | RanggaBS",
	description: "Personal portfolio of RanggaBS",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={font.className}>
				<Theme>
					<div className="relative flex min-h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
						<Navbar />

						<ThemeToggle />

						{children}
					</div>
				</Theme>
			</body>
		</html>
	);
};

export default RootLayout;
