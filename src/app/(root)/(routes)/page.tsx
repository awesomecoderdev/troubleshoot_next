"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useAlertModal } from "@/hooks/use-alert-modal";
import { Prose } from "@/components/Prose";
import Contents, { Animator, Motion } from "@/components/Contents";
import {
	fadeIn,
	navVariants,
	skillsContainer,
	slideIn,
	textVariant,
	textVariant2,
} from "@/utils/motion";
import { cn, truncate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";

export default function Home() {
	const { onOpen } = useAlertModal();
	const router = useRouter();
	const profileRef = useRef<HTMLDivElement | null>(null);

	const getServices = async () => {
		// const csrf = await axios.post("/refresh-csrf");
		// console.log("csrf", csrf);
		try {
			const response = await axios.get("/auth/customer");
			const data = await response.data;
			console.log("data", data);
		} catch (error) {
			console.log("error", error);
		}
	};
	useEffect(() => {
		getServices();
		// @ts-ignore
		console.log("customer", customer);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Contents>
			<section className="flex min-h-screen flex-col items-center justify-between p-24">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Possimus dignissimos, eaque, provident libero veritatis
					aspernatur voluptates ducimus corporis quidem quis dolorem
					aut officiis ea doloribus repellat cumque recusandae saepe
					officia.
				</p>
			</section>
		</Contents>
	);
}
