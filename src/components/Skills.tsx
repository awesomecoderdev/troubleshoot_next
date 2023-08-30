"use client";
import React from "react";
import { Prose } from "@/components/Prose";
import { skills as skillsList } from "@/lib/const";
import Contents from "@/components/Contents";
import { ArrowRightIcon } from "@/components/Icons";
import { cn, truncate } from "@/lib/utils";
import { Button } from "./Button";
import { skillsContainer } from "@/utils/motion";
import { useAnimate } from "framer-motion";

const Skills = () => {
	const [skills, setSkills] = React.useState<Skill[]>(skillsList);
	const [filter, setFilter] = React.useState<string>("all");
	const [scope, animate] = useAnimate();

	React.useEffect(() => {
		const skills = skillsList.filter((item) => item.type?.includes(filter));
		setSkills(skills);
	}, [filter]);

	return (
		<Prose enable={false}>
			<div className="relative  mx-auto py-10 space-y-3">
				<Button
					className={cn("mr-3")}
					variant={filter == "all" ? "primary" : "outline"}
					onClick={() => setFilter("all")}
				>
					All
				</Button>
				<Button
					className={cn("mr-3")}
					variant={filter == "frontend" ? "primary" : "outline"}
					onClick={() => setFilter("frontend")}
				>
					Frontend
				</Button>
				<Button
					className={cn("mr-3")}
					variant={filter == "backend" ? "primary" : "outline"}
					onClick={() => setFilter("backend")}
				>
					Backend
				</Button>
				<Button
					className={cn("mr-3")}
					variant={filter == "database" ? "primary" : "outline"}
					onClick={() => setFilter("database")}
				>
					Database
				</Button>
				{/* <Button
					className={cn("mr-3")}
					variant={filter == "cms" ? "primary" : "outline"}
					onClick={() => setFilter("cms")}
				>
					CMS
				</Button> */}
				<Button
					className={cn("mr-3")}
					variant={filter == "server" ? "primary" : "outline"}
					onClick={() => setFilter("server")}
				>
					Server
				</Button>

				<Button
					className={cn("mr-3")}
					variant={filter == "others" ? "primary" : "outline"}
					onClick={() => setFilter("others")}
				>
					Others
				</Button>
			</div>
			<Motion
				layout
				variants={skillsContainer}
				className="relative mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 "
				// @ts-ignore
				ref={scope}
			>
				<Animator>
					{skills.map((skill, i) => {
						const skl = skills[i + 1] ?? skills[i];
						const id =
							skl?.name
								.toLowerCase()
								.replace(" (", ".")
								.replace(" ", "-")
								.replace(" ", "-")
								.split(".")[0] ?? skl?.name.toLowerCase();
						return (
							<Motion
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								whileInView={{
									transition: {
										type: "spring",
										duration: 1.8,
										delay: 0.5,
										stiffness: 300,
										damping: 140,
									},
								}}
								transition={{
									duration: 0.5,
									ease: "easeInOut",
								}}
								exit={{
									opacity: 0,
									scale: 0.95,
								}}
								key={skill.name + i}
								className="relative flex flex-row cursor-pointer"
								// @ts-ignore
								// onClick={() => console.log(skill)}
								id={id}
							>
								<div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
									{typeof skill.icon == "function" ? (
										<skill.icon />
									) : (
										skill.icon
									)}
								</div>
								<div className="peer group ml-6 flex-auto">
									<h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
										<p className="before:absolute before:-inset-3 before:rounded-2xl">
											{skill.name}
											<ArrowRightIcon className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100" />
										</p>
									</h4>
									<p className="text-sm leading-6 text-slate-700 dark:text-slate-400 line-clamp-2">
										{/* {truncate(skill.description, 65)} */}
										{skill.description}
									</p>
								</div>

								<div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100"></div>
							</Motion>
						);
					})}
				</Animator>
			</Motion>
		</Prose>
	);
};

export default Skills;
