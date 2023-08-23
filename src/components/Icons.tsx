"use client";

import Link from "next/link";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

import {
	TwitterIcon,
	InstagramIcon,
	GitHubIcon,
	LinkedInIcon,
} from "@/components/SocialIcons";

import BlurImage from "./BlurImage";

export function ArrowDownIcon({ ...props }) {
	return (
		<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
			<path
				d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function SocialLink({
	icon: Icon,
	href = "/about",
	...props
}: {
	icon?: any;
	href?: string;
}) {
	return (
		<Link href={`${href}`} className="group -m-1 p-1" {...props}>
			<Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
		</Link>
	);
}

export function ArrowRightIcon({
	className,
	...props
}: {
	className?: string;
}) {
	return (
		<svg
			viewBox="0 0 3 6"
			className={cn(
				"", //default
				className
			)}
			{...props}
		>
			<path
				d="M0 0L3 3L0 6"
				fill="none"
				strokeWidth="2"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	);
}

export function CheckIcon({ className, ...props }: { className?: string }) {
	return (
		<svg
			version="1.1"
			className={cn(
				"w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0", //default
				className
			)}
			{...props}
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
		</svg>
	);
}
