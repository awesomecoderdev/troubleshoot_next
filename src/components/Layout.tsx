"use client";

import Link from "next/link";
import { Fragment, useEffect, useMemo, useRef } from "react";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";

import { Prose } from "@/components/Prose";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { HeroPattern } from "@/components/HeroPattern";
import { Footer } from "@/components/Footer";
import { Pattern } from "@/components/Hero";
// import TagManager from "react-gtm-module";

export function Layout({ children = null, auth = null }: LayoutProps) {
	const pathname = usePathname();

	return (
		<Fragment>
			<header className={cn("relative z-40 contents px-6 pt-4 pb-8 ")}>
				<Header auth={auth} />
			</header>
			<Prose
				as="main"
				className={cn(
					"relative min-h-[calc(100vh-75px)] pt-24 lg:px-8 sm:px-7 xs:px-5 px-4 xl:overflow-visible overflow-hidden"
				)}
			>
				{pathname == "/" && (
					<>
						<HeroPattern /> <Pattern />
					</>
				)}
				{children}
			</Prose>
			<Footer
				// className={cn("absolute w-full bottom-0")}
				className="py-6 lg:mt-10"
			/>
		</Fragment>
	);
}
