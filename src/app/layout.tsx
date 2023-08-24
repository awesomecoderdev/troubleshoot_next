import { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn, constructMetadata } from "@/lib/utils";
import { cookies as getCookies } from "next/headers";

import "./globals.css";
import { getUserFromSession } from "@/lib/buffer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata({
	title: "One-stop Solution for your Services.",
	description: "One-stop Solution for your Services.",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookies = getCookies();
	const session_id = cookies.get("session_id")?.value;
	const session = getUserFromSession(session_id);

	return (
		<html lang="en">
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `const customer = ${session};`,
					}}
				/>
			</head>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					// "text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900",
					inter.className
				)}
			>
				{children}
			</body>
		</html>
	);
}
