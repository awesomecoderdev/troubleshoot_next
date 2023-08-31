import React, { Fragment } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { constructMetadata, url } from "@/lib/utils";
import fetch from "@/lib/featch";
import Contents from "@/components/Contents";

// export const metadata: Metadata = constructMetadata({
// 	title: "All Services",
// 	description: "One-stop Solution for your Services.",
// });

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function getService(id: string): Promise<Service> {
	// fetch data
	const req = await fetch(url(`/service/${id}`));
	if (!req.ok) {
		throw new Error("Failed to fetch data");
	}

	const res = (await req.json()) as AxiosResponse;

	const service = res?.data?.service;
	return service;
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const id = params.id;

	// fetch data
	const req = await fetch(url(`/service/${id}`));

	if (!req.ok) {
		throw new Error("Failed to fetch data");
	}

	const res = (await req.json()) as AxiosResponse;

	const service: Service = res?.data?.service;

	return constructMetadata({
		title: `${service.name}`,
		description: "One-stop Solution for your Services.",
	});
}

export default async function Service({ params, searchParams }: Props) {
	const service = await getService(`${params.id}`);

	return (
		<Contents className="max-w-6xl mx-auto ">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi error
			minima magni provident enim temporibus odit, animi distinctio
			maiores reprehenderit consectetur laudantium iure molestiae fuga
			aliquam quidem et. Libero, perferendis!
			<h1>{JSON.stringify(service, null, 4)}</h1>
		</Contents>
	);
}
