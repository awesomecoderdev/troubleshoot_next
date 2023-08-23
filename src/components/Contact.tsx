"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Properties, Property, Row, Col, Note } from "@/components/Note";
import { Prose } from "@/components/Prose";
import { fadeIn, slideIn, textVariant, textVariant2 } from "@/utils/motion";
import { Button } from "@/components/Button";
import { ArrowRightIcon, MailIcon, WhatsAppIcon } from "@/components/Icons";
import { Motion } from "@/components/Contents";
import { Mail, Phone } from "lucide-react";
import { contactFormSchema } from "@/lib/validator";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { LoadingCircle } from "@/components/animation/Loading";
import axios from "@/lib/axios";
import { GOOGLE_APP_ENDPOINT } from "@/lib/utils";

const ContactUs = ({ featured = false }: { featured?: boolean }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
		try {
			setLoading(true);
			let data = new FormData();
			data.append("name", values.name);
			data.append("email", values.email);
			data.append("subject", values.subject);
			data.append("message", values.message);
			data.append("type", "contact");
			const request = await axios.post("/api/contact", values);
			const response = await request.data;
			if (response.success) {
				toast.success(response.message);
				form.reset();
			} else {
				toast.error("Something went wrong!");
			}
			setLoading(false);

			const req = await fetch(GOOGLE_APP_ENDPOINT, {
				method: "POST",
				body: data,
			});
		} catch (error) {
			setLoading(false);
			toast.error("Something went wrong!");
		}
	};

	return (
		<Fragment>
			<Row className="relative lg:grid-cols-8 md:py-5 py-0 mt-5 pb-10">
				<Col className="lg:col-span-3 ">
					<div className="relative lg:pr-4">
						<div className="gradient-02 opacity-50 sm:opacity-90 -z-10"></div>
						{featured && (
							<Motion
								variants={fadeIn("right", "tween", 0.5, 0.75)}
								initial="hidden"
								whileInView="show"
								className="relative h-56 flex items-start justify-start aspect-[1/1] w-full "
							>
								<div
									className="mx-5 h-56 w-56 aspect-[1/1] bg-cover bg-[center_20%] [mask-image:url('/mask.png')] [mask-size:100%] [mask-repeat:no-repeat] [mask-position:top] bg-slate-400"
									style={{
										backgroundImage: "url('/avatar.jpg')",
										// backgroundImage: "url('/avatar.jpg')",
									}}
								></div>
							</Motion>
						)}

						{featured && (
							<Fragment>
								<div className="m-1 overflow-hidden">
									<Motion
										as="h1"
										initial={{ y: "120%", opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{
											duration: 0.75,
											delay: 0.2,
										}}
										className="text-2xl text-balance"
									>
										Hi! My name is Mohammad Ibrahim. I’m
										Full Stack Developer.
									</Motion>
								</div>

								<Motion
									as="h6"
									variants={slideIn(
										"left",
										"spring",
										0.5,
										0.75
									)}
									initial="hidden"
									whileInView="show"
									className="text-md font-semibold text-gray-900 dark:text-white"
								>
									You can contact me directly. Feel free to
									contact.
								</Motion>
							</Fragment>
						)}

						{!featured && (
							<Fragment>
								<div className="m-1 md:pt-10 pt-5 pb-5 overflow-hidden">
									<Motion
										as="h1"
										initial={{ y: "120%", opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{
											duration: 0.75,
											delay: 0.2,
										}}
										className="text-2xl text-balance"
									>
										We’d love to hear from you. You can
										contact me directly. Feel free to
										contact.
									</Motion>
								</div>
							</Fragment>
						)}

						<Motion className="relative space-y-5 py-5">
							<Motion
								className="flex items-center space-x-3"
								// @ts-ignore
								onClick={() =>
									window.open(
										"mailto:awesomecoder.dev@gmail.com",
										"_blank"
									)
								}
							>
								<div className="relative bg-teal-300/10 flex justify-center items-center h-10 w-10 rounded-full overflow-hidden ">
									<Mail className="h-8 w-8 p-2 text-teal-400" />
								</div>
								<span className="text-sm font-semibold text-gray-900 dark:text-white">
									awesomecoder.dev@gmail.com
								</span>
							</Motion>
							<Motion
								// @ts-ignore
								href="mailto:awesomecoder.dev@gmail.com"
								className="flex items-center space-x-3"
								// @ts-ignore
								onClick={() =>
									window.open("tel:+8801720115642", "_blank")
								}
							>
								<div className="relative bg-teal-300/10 flex justify-center items-center h-10 w-10 rounded-full overflow-hidden ">
									<Phone className="h-8 w-8 p-2 text-teal-400" />
								</div>
								<span className="text-sm font-semibold text-gray-900 dark:text-white">{`+880 1720 115642`}</span>
								{/* <span className="text-sm font-semibold text-gray-900 dark:text-white">{`+44 7724 870078`}</span> */}
							</Motion>

							<Motion
								// @ts-ignore
								href="mailto:awesomecoder.dev@gmail.com"
								className="flex items-center space-x-3"
								// @ts-ignore
								onClick={() =>
									window.open(
										"https://wa.me/447724870078",
										"_blank"
									)
								}
							>
								<div className="relative bg-teal-300/10 flex justify-center items-center h-10 w-10 rounded-full overflow-hidden ">
									<WhatsAppIcon className="h-9 w-9 p-2 text-teal-400" />
								</div>
								<span className="text-sm font-semibold text-gray-900 dark:text-white">{`+44 7724 870078`}</span>
							</Motion>
						</Motion>

						{!featured && (
							<div className="relative max-w-lg">
								<Motion
									as="p"
									// variants={textVariant(0.5)}
									variants={fadeIn(
										"right",
										"spring",
										0.5,
										0.75
									)}
									initial="hidden"
									whileInView="show"
									className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"
								>
									Search on Google "Create Custom Plugin
									Fiverr" , You will find me on the first
									result from almost 800000+ results .
								</Motion>
								<div className="not-prose">
									<Button
										variant="text"
										arrow="right"
										target="_blank"
										href="https://www.google.com/search?q=create+custom+plugin+fiverr"
									>
										Find me on Google
									</Button>
								</div>
							</div>
						)}
					</div>
				</Col>
				<Col className="lg:col-span-5 md:py-5">
					<Prose enable={false}>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-5 lg:px-4"
							>
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem className="space-y-0 sm:col-span-2">
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input
													disabled={loading}
													className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
													placeholder="Your Name"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem className="space-y-0 sm:col-span-2">
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													disabled={loading}
													className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
													placeholder="yourname@example.com"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="subject"
									render={({ field }) => (
										<FormItem className="space-y-0 sm:col-span-2">
											<FormLabel>Subject</FormLabel>
											<FormControl>
												<Input
													disabled={loading}
													className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
													placeholder="Let us know how we can help you."
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem className="space-y-0 sm:col-span-2">
											<FormLabel>Your message</FormLabel>
											<FormControl>
												<textarea
													disabled={loading}
													rows={6}
													className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
													placeholder="Leave a comment..."
													{...field}
												></textarea>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									// variant="text"
									disabled={loading}
									type="submit"
									arrow={!loading ? "right" : undefined}
									className="py-2 px-5"
								>
									Send message
									{loading && (
										<LoadingCircle className="h-5 w-5 -mr-1 mt-0.5" />
									)}
								</Button>
							</form>
						</Form>
					</Prose>
				</Col>
			</Row>
		</Fragment>
	);
};

export default ContactUs;
