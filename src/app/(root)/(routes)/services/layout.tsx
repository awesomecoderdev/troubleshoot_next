import { Metadata } from "next";
import { constructMetadata } from "@/lib/utils";
export const metadata: Metadata = constructMetadata({
	title: "All Services",
	description: "One-stop Solution for your Services.",
});

export default function ServiceLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
