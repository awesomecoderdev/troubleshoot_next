"use client";

import React, {
	ComponentType,
	Fragment,
	HTMLAttributes,
	PropsWithChildren,
	ReactNode,
} from "react";
import { motion, MotionProps, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Pattern } from "@/components/Hero";
import { textContainer, textVariant2 } from "@/utils/motion";

// interface ContentsProps extends MotionProps {
interface ContentsProps {
	className?: string;
	children?: ReactNode;
}

const Contents: React.FC<ContentsProps> = ({
	children,
	className,
	...params
}) => {
	return (
		<Fragment>
			{/* <Pattern /> */}
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 0.75,
					ease: "easeOut",
				}}
				exit={{ opacity: 0 }}
				{...params}
				className={cn(
					"", // default class
					className
				)}
			>
				{children}
			</motion.div> */}
			<section
				{...params}
				className={cn(
					"relative", // default class
					className
				)}
			>
				{children}
			</section>
		</Fragment>
	);
};

export default Contents;

interface MotionComponentProps extends MotionProps {
	className?: string;
	as?: keyof JSX.IntrinsicElements | React.ComponentType<string>;
	children?: React.ReactNode;
	onMouseMove?: any;
}

export const Motion: React.FC<MotionComponentProps> = ({
	children,
	className,
	onMouseMove,
	as = "div",
	...params
}) => {
	// @ts-ignore
	const Component: any = typeof as === "string" ? motion[as] : motion["div"];

	return (
		<Component
			{...params}
			className={cn(
				"", // default class
				className
			)}
		>
			{children}
		</Component>
	);
};

export const Animator = AnimatePresence;

interface TypingTextProps extends MotionComponentProps {
	title?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({
	title = "",
	children,
	className,
	onMouseMove,
	as = "h1",
	...params
}) => {
	// @ts-ignore
	const Component: any = typeof as === "string" ? motion[as] : motion["div"];

	return (
		<Animator>
			<Component
				{...params}
				variants={textContainer}
				className={cn(
					// `font-normal text-[14px] text-secondary-white`,
					className
				)}
			>
				{Array.from(title).map((letter, index) => (
					<motion.span variants={textVariant2} key={index}>
						{letter === " " ? "\u00A0" : letter}
					</motion.span>
				))}
			</Component>
		</Animator>
	);
};
