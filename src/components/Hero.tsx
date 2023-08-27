"use client";
import { cn } from "@/lib/utils";
import React, { Fragment } from "react";
import BlurImage from "@/components/BlurImage";
import heroImage from "@/images/hero.png";
import { Heading } from "./Heading";

const Hero = () => {
	return (
		<Fragment>
			<div className="relative w-full py-14 flex flex-col items-center">
				<Heading level="1" className="text-5xl text-center">
					One-stop Solution for your{" "}
					<span className="text-primary-400">Services.</span>
				</Heading>
				<p className="text-center  text-lg my-5">
					We are always working for you. Take any of our services
					anytime.
				</p>

				<div className="relative my-10 py-1 px-1 w-screen max-w-lg rounded-md bg-white shadow-sm flex justify-between items-center overflow-hidden">
					<input
						type="text"
						className="bg-transparent w-full border-none text-sm outline-none hover:outline-none pr-24"
						placeholder="What are you locking for?"
					/>
					<button
						type="submit"
						className="absolute right-0 primary-500 h-full bg-primary-500 text-white px-4 font-semibold"
					>
						Search
					</button>
				</div>
				<BlurImage
					src={heroImage}
					alt=""
					className="w-full max-w-3xl py-10"
				/>
			</div>
		</Fragment>
	);
};

export const Pattern = ({ className, ...props }: { className?: string }) => {
	return (
		<Fragment>
			<div
				className={cn(
					"absolute inset-0 -z-10 mx-0 max-w-full overflow-hidden",
					className
				)}
				{...props}
			>
				<div className="absolute left-1/2 top-0 ml-[-38rem] h-[42rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
					<div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-200 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary-400/30 dark:to-primary-200/30 dark:opacity-100"></div>
					<svg
						viewBox="0 0 1113 440"
						aria-hidden="true"
						className="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-primary-400/10 blur-[26px] hidden"
					>
						<path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
					</svg>
				</div>
			</div>
		</Fragment>
	);
};
export default Hero;
