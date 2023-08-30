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
	const [activeCategory, setActiveCategory] = useState<number>(
		cats[0]?.id ?? 0
	);
	const [activeSubcategory, setActiveSubcategory] = useState<number>(0);
	const [activeId, setActiveId] = useState<number>(0);

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
							activeCategory == category.id
								? "bg-primary-100"
								: "bg-primary-50/50 hover:bg-primary-50"
						)}
						onClick={(e) => {
							setActiveCategory(category.id);
							setActiveSubcategory(0);
						}}
					>
						<span className="h-1.5 w-1.5 rounded-full mr-2.5 bg-primary-600"></span>
						<p className="text-sm font-semibold">{category.name}</p>
						{(category.subcategories?.length ?? 0) != 0 && (
							<div
								className="h-full w-10 absolute right-0 top-0 flex items-center justify-center"
								// @ts-ignore
								onClick={(e) =>
									setActiveId((prev) =>
										prev == category.id ? 0 : category.id
									)
								}
							>
								<ArrowIcon
									className={cn(
										"h-3 w-3 text-primary-600",
										activeId == category.id &&
											"rotate-[360deg]"
									)}
								/>
							</div>
						)}
					</div>

					{(category.subcategories?.length ?? 0) != 0 && (
						<Fragment>
							<div
								className={cn(
									"relative pl-4 space-y-4",
									activeId != category.id && "hidden"
								)}
							>
								{category.subcategories?.map((subcategory) => (
									<Fragment key={subcategory.id}>
										<div
											className={cn(
												"relative flex items-center rounded-xl px-3 py-2 cursor-pointer",
												activeSubcategory ==
													subcategory.id &&
													subcategory.parent_id ==
														activeCategory
													? "bg-primary-100"
													: "bg-primary-50/50 hover:bg-primary-50"
											)}
											onClick={(e) => {
												setActiveSubcategory(
													subcategory.id
												);
												setActiveCategory(
													subcategory.parent_id
												);
											}}
										>
											<span className="h-1.5 w-1.5 rounded-full mr-2.5 bg-primary-600"></span>
											<p className="text-sm font-semibold">
												{subcategory.name}
											</p>
										</div>
									</Fragment>
								))}
							</div>
						</Fragment>
					)}
				</Fragment>
			))}
		</Fragment>
	);
};
