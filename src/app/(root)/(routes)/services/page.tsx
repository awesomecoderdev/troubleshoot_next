import React from "react";
import { Prose } from "@/components/Prose";
import Contents from "@/components/Contents";
import { cn, truncate, url } from "@/lib/utils";
import { notFound, useRouter } from "next/navigation";
import { Heading } from "@/components/Heading";
import BlurImage from "@/components/BlurImage";
import aboutImage from "@/images/about.png";
import { Properties, Property, Row, Col, Note } from "@/components/Note";
import { ServiceCategories } from "@/components/ServiceCategories";
import fetch from "@/lib/featch";

const getCategories = async () => {
	try {
		const req = await fetch(`${url("/categories")}`);

		if (!req.ok) {
			throw new Error("Failed to fetch data");
		}
		const res = (await req.json()) as AxiosResponse;

		return res?.data?.categories ?? [];
	} catch (error) {
		// throw new Error("Failed to fetch data");

		return [error];
	}
};

export default async function Services() {
	const categories = await getCategories();

	return (
		<Contents className="max-w-6xl mx-auto ">
			<div className="relative w-full">
				<Heading level={1}>All Services</Heading>
				<div className="relative grid xl:grid-cols-5 lg:grid-cols-4 xl:py-14 py-8">
					<div className="relative xl:col-span-3 lg:col-span-2 col-span-1 py-4 pr-4">
						<Heading
							level={1}
							className="text-balance xl:text-5xl lg:text-4xl md:text-4xl text-3xl"
						>
							Your IT Trouble is ours to find and solve
						</Heading>
						<p className="lead text-balance py-4">
							Troubleshoot is a start-up organization offering
							residents of Bangladesh a complete IT corporate
							service. By developing the reputation as a
							qualified, reasonably priced and trusted service
							provider, troubleshoot quickly generated market
							penetration and develop a solid foundation of repeat
							customers. We are here to make your corporate life
							run smoothly! We work on demand subject to
							availability, nevertheless arrive on time, and are
							available for a same day call-outs wherever
							possible. Our multi-skilled troubleshooters work
							alone unless otherwise requested by customers. We
							are always here to help, at a time that suits you
						</p>
					</div>

					<div className="relative lg:col-span-2 col-span-1 lg:p-4 p-0">
						<div className="relative overflow-hidden flex lg:items-start lg:justify-end items-center justify-start">
							<BlurImage
								src={aboutImage}
								height={400}
								width={400}
								alt=""
								sizes="(min-width: 1024px) 32rem, 20rem"
								className="lg:aspect-[10/7] md:aspect-[10/4] aspect-[10/6] w-full m-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
							/>
						</div>
					</div>
				</div>

				<Row className="relative xl:grid-cols-8  lg:grid-cols-6 md:py-5 py-0 mt-5 pb-10">
					<Col className="lg:col-span-3">
						<Prose
							enable={false}
							className="relative space-y-4 py-4 px-6 rounded-md shadow"
						>
							<ServiceCategories categories={categories} />
						</Prose>
					</Col>
					<Col className="xl:col-span-5 lg:col-span-3 flex">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Alias odit reprehenderit, possimus error
						laboriosam consectetur ut. Hic temporibus veniam id
						nostrum. Minima, asperiores dignissimos tempora
						reprehenderit laborum doloribus modi amet?
					</Col>
				</Row>
			</div>
		</Contents>
	);
}
