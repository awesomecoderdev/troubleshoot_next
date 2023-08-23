"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Animator, Motion } from "@/components/Contents";
import { chunk, cn, truncate } from "@/lib/utils";

import {
	imageList,
	projectsList,
	resumes,
	testimonials as testimonialList,
} from "@/lib/const";
import { fadeIn, skillsContainer, textVariant } from "@/utils/motion";
import Ratings from "./Ratings";
import { MapPin } from "lucide-react";
import { FiverrIcon } from "./Icons";
import Link from "next/link";

export function TestimonialList() {
	const [testimonialsArr, setTestimonialsArr] = useState(
		chunk(testimonialList, 16)
	);

	useEffect(() => {
		const isTab = window.innerWidth >= 600 && 1024 > window.innerWidth;
		if (isTab) {
			setTestimonialsArr(chunk(testimonialList, 24));
		} else {
			setTestimonialsArr(chunk(testimonialList, 16));
		}
	}, []);

	return (
		<Motion
			variants={skillsContainer}
			className="relative grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:py-20 lg:py-16 md:py-14 py-10"
		>
			{testimonialsArr.map((testimonials, index) => (
				<div
					key={index}
					className={cn(
						"relative grid grid-cols-1 gap-x-12 gap-y-14",
						index == 2 && "lg:grid md:hidden grid"
					)}
				>
					{testimonials.map((testimonial, i) => (
						<Motion
							as="article"
							className="relative"
							key={testimonial.name + i}
							variants={textVariant(0.15)}
							initial="hidden"
							whileInView="show"
						>
							<FiverrIcon className="absolute h-10 w-10 right-4 top-0 z-[12] pointer-events-none" />
							<Link
								href="https://fiverr.com/mkholilulla/"
								target="_blank"
								className="md:p-2 p-4 group relative flex flex-col items-start cursor-pointer"
							>
								<div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-50 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl rounded-md max-sm:shadow-lg max-sm:border border-opacity-50" />
								<div className="relative">
									<span className="absolute -inset-y-6 -inset-x-4 z-[11] sm:-inset-x-6 sm:rounded-2xl rounded-md" />
									<div className="relative z-10">
										<div>
											<div className="flex items-center mb-4 space-x-4">
												<Avatar>
													{/* <AvatarImage
													src="https://github.com/shadcn.png"
													alt="@shadcn"
												/> */}
													<AvatarFallback className="text-sm font-semibold text-gray-900 dark:text-white">
														{testimonial.name.substring(
															0,
															1
														)}
													</AvatarFallback>
												</Avatar>
												<div className="space-y-1 font-medium dark:text-white">
													<h3 className="text-sm font-semibold text-gray-900 dark:text-white">
														{`${testimonial.name} `}
													</h3>
													<div className="flex items-center">
														<MapPin className="h-4 w-4 text-gray-300 dark:text-gray-500 mr-1" />
														{testimonial.country}
													</div>
												</div>
											</div>
											<div className="flex items-center mb-1">
												<Ratings />
												{/* <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
												Thinking to buy another one!
											</h3> */}
											</div>
											<h3 className="text-sm font-semibold text-gray-900 dark:text-white">
												{testimonial.description}
											</h3>
										</div>
									</div>
								</div>
							</Link>
						</Motion>
					))}
				</div>
			))}
			{/* <div className={`footer-gradient opacity-70`}></div> */}
		</Motion>
	);
}

export function TestimonialSlider() {
	const featuredTestimonials = testimonialList
		.filter(
			(item) =>
				item.description.length > 100 && item.country != "Pakistan"
		)
		.slice(0, 12);
	const [testimonialsArr, setTestimonialsArr] = useState(
		chunk(featuredTestimonials, 4)
	);

	useEffect(() => {
		const isTab = window.innerWidth >= 600 && 1024 > window.innerWidth;
		if (isTab) {
			setTestimonialsArr(chunk(featuredTestimonials, 6));
		} else {
			setTestimonialsArr(chunk(featuredTestimonials, 4));
		}
	}, []);

	return (
		<Motion
			variants={skillsContainer}
			className="relative grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:py-20 lg:py-16 md:py-14 py-10"
		>
			{testimonialsArr.map((testimonials, index) => (
				<div
					key={index}
					className={cn(
						"relative grid grid-cols-1 gap-x-12 gap-y-14",
						index == 2 && "lg:grid md:hidden grid"
					)}
				>
					{/* <div className={`gradient-0${index + 1}`}></div> */}
					{/* <div className="gradient-02 opacity-50 sm:opacity-90"></div> */}
					{testimonials.map((testimonial, i) => (
						<Motion
							as="article"
							className="relative"
							key={testimonial.name + i}
							variants={textVariant(0.15)}
							initial="hidden"
							whileInView="show"
						>
							<FiverrIcon className="absolute h-10 w-10 right-4 top-0 z-[12] pointer-events-none" />
							<Link
								href="https://fiverr.com/mkholilulla/"
								target="_blank"
								className="md:p-2 p-4 group relative flex flex-col items-start cursor-pointer"
							>
								<div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-50 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl rounded-md max-sm:shadow-lg max-sm:border border-opacity-50" />
								<div className="relative">
									<span className="absolute -inset-y-6 -inset-x-4 z-[11] sm:-inset-x-6 sm:rounded-2xl rounded-md" />
									<div className="relative z-10">
										<div>
											<div className="flex items-center mb-4 space-x-4">
												<Avatar>
													{/*
														<AvatarImage
														src="https://github.com/shadcn.png"
														alt="@shadcn"
														/>
													*/}
													<AvatarFallback className="text-sm font-semibold text-gray-900 dark:text-white">
														{testimonial.name.substring(
															0,
															1
														)}
													</AvatarFallback>
												</Avatar>
												<div className="space-y-1 font-medium dark:text-white">
													<h3 className="text-sm font-semibold text-gray-900 dark:text-white">
														{`${testimonial.name} `}
													</h3>
													<div className="flex items-center">
														<MapPin className="h-4 w-4 text-gray-300 dark:text-gray-500 mr-1" />
														{testimonial.country}
													</div>
												</div>
											</div>
											<div className="flex items-center mb-1">
												<Ratings />
												{/* <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
												Thinking to buy another one!
											</h3> */}
											</div>
											<h3 className="text-sm font-semibold text-gray-900 dark:text-white">
												{testimonial.description}
											</h3>
										</div>
									</div>
								</div>
							</Link>
						</Motion>
					))}
				</div>
			))}
		</Motion>
	);
}
