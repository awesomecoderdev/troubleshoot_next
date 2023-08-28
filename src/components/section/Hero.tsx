"use client";
import { cn } from "@/lib/utils";
import React, { Fragment } from "react";
import BlurImage from "@/components/BlurImage";
import heroImage from "@/images/hero.png";
import { Heading } from "@/components/Heading";

export const Hero = () => {
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

				<div className="relative my-10 py-1 px-1 lg:w-screen w-[90vw] max-w-lg rounded-md bg-white shadow-sm flex justify-between items-center overflow-hidden">
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
					className="w-full xl:max-w-3xl lg:max-w-xl md:max-w-md max-w-xs py-10"
				/>
			</div>
		</Fragment>
	);
};
