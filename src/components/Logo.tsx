"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Fragment } from "react";
import logo from "@/images/logos/logo.png";

export function Logo(props: any) {
	return (
		<Fragment>
			<Image
				src={logo}
				alt={`${process.env.APP_NAME}`}
				className="dark:invert"
				width={60}
				height={14}
				priority
			/>
		</Fragment>
	);
}
