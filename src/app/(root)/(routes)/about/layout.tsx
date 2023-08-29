import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { cn, constructMetadata } from "@/lib/utils";
export const metadata: Metadata = constructMetadata({
	title: "About",
	description: "One-stop Solution for your Services.",
});

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
