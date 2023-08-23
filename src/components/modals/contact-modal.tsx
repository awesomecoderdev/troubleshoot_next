"use client";
import React, {
	useCallback,
	useRef,
	useEffect,
	MouseEventHandler,
} from "react";
import { useHydration } from "@/hooks/hydration";
// import { Modal } from "@/components/ui/modal";
import { Modal } from "@/components/Modal";
import { Prose } from "@/components/Prose";
import { Photos } from "@/components/Profile";
import { fadeIn, slideIn, textVariant, textVariant2 } from "@/utils/motion";
import { Button } from "@/components/Button";
import { ArrowRightIcon, MailIcon, WhatsAppIcon } from "@/components/Icons";
import { Motion } from "@/components/Contents";
import { Mail, Phone } from "lucide-react";

const ContactModal: React.FC<PageProps> = ({ children }) => {
	return (
		<React.Fragment>
			<Modal
				className="lg:w-[100%] overflow-clip"
				// isOpen={true}
				// onClose={() => console.log}
				// title="Skills"
				// description="Hello world"
			>
				<Prose enable={false}>
					<div className="relative">
						<div className="gradient-02 opacity-50 sm:opacity-90 -z-10"></div>
						<div className="grid lg:grid-cols-10 col-span-1 gap-x-3 ">
							<div className="relative lg:col-span-4 lg:block hidden">
								<Motion
									variants={fadeIn(
										"right",
										"tween",
										0.5,
										0.75
									)}
									initial="hidden"
									animate="show"
									className="relative h-full flex items-center justify-start aspect-[1/1] w-full "
								>
									<div
										className="mx-5 h-[90%] w-[90%] aspect-[1/1] bg-cover bg-[center_20%] [mask-image:url('/mask.png')] [mask-size:100%] [mask-repeat:no-repeat] [mask-position:top] bg-slate-400"
										style={{
											backgroundImage:
												"url('/avatar.jpg')",
											// backgroundImage: "url('/avatar.jpg')",
										}}
									></div>
								</Motion>
							</div>
							<div className="relative lg:col-span-6">
								<div className="m-1 overflow-hidden">
									<Motion
										as="h1"
										initial={{ y: "120%", opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{
											duration: 0.75,
											delay: 0.2,
										}}
										className="lg:text-4xl text-3xl font-semibold text-balance text-gray-900 dark:text-white"
									>
										Hi! My name is Mohammad Ibrahim. I’m
										Full Stack Developer.
									</Motion>
								</div>
								<Motion
									as="h6"
									variants={slideIn(
										"right",
										"spring",
										0.5,
										0.75
									)}
									initial="hidden"
									animate="show"
									className="text-md font-semibold text-gray-900 dark:text-white"
								>
									You can contact me directly. Feel free to
									contact.
								</Motion>
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
											window.open(
												"tel:+8801720115642",
												"_blank"
											)
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
							</div>
						</div>
					</div>
				</Prose>
			</Modal>
		</React.Fragment>
	);
};

export default ContactModal;
