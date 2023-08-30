"use client";

import React, { Fragment, useEffect, useState } from "react";
import { ArrowIcon } from "@/components/Icons";
import axios from "@/lib/axios";
import { chunk, cn } from "@/lib/utils";

interface ServiceCategoriesProps {
	categories?: Category[];
}

export const ServiceCategories: React.FC<ServiceCategoriesProps> = ({
	categories,
}) => {
	const [categoriesList, setCategoriesList] = useState(
		chunk(categories ?? [], 10)
	);
	const [loading, setLoading] = useState<boolean>(true);
	const [services, setServices] = useState<Service[]>([]);
	const [cats, setCats] = useState<Category[]>(categoriesList[0] ?? []);
	const [active, setActive] = useState<number>(cats[0]?.id ?? 0);

	// useEffect(() => {
	// 	const getCategories = async () => {
	// 		try {
	// 			const request = await axios.get("/categories"); // '/categories/?featured=true'
	// 			const response: AxiosResponse = await request.data;

	// 			if (response.status) {
	// 				const data = response.data;
	// 				const categories = data.categories;
	// 				setCats(categories);
	// 			}
	// 		} catch (error) {
	// 			setCats([]);
	// 		}
	// 		setLoading(false);
	// 	};

	// 	getCategories();
	// }, []);

	return (
		<Fragment>
			{cats?.map((category) => (
				<Fragment key={category.id}>
					<div
						className={cn(
							"relative flex items-center rounded-xl px-3 py-2 cursor-pointer",
							active == category.id
								? "bg-primary-100"
								: "bg-primary-50/50 hover:bg-primary-50"
						)}
						onClick={(e) => setActive(category.id)}
					>
						<span className="h-1.5 w-1.5 rounded-full mr-2.5 bg-primary-600"></span>
						<p className="text-sm font-semibold">{category.name}</p>
						{active == category.id && (
							<ArrowIcon className="absolute right-4 h-3 w-3 text-primary-600" />
						)}
					</div>
				</Fragment>
			))}
		</Fragment>
	);
};
