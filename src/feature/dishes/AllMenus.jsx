import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQueryClient } from "@tanstack/react-query";

import DishItem from "./DishItem";
import DishList from "./DishList";
import useDish from "./useDish";
import Filter from "../../UI/Filter";
import PageSpinner from "../../UI/PageSpinner";
import Button from "../../UI/Button";
import Loader from "../../UI/Loader";

export default function AllMenus() {
	const queryClient = useQueryClient();

	const [query, setQuery] = useState("");

	const [searchParams, setSearchParams] = useSearchParams();

	const [page, setPage] = useState(1);


	const { data, isLoading } = useDish(page);

	const filterValue = searchParams.get("type") || "all";
	const queryValue = searchParams.get("search") || "";

	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	useEffect(
		function () {
			if (queryValue) {
				setQuery(queryValue);
			}
		},
		[queryValue]
	);

	useEffect(() => {
		queryClient.invalidateQueries("dishes");
	}, [page, queryClient]);

	function handleSeeMore() {
		setPage(page + 1);
	}
	
	let sortedItem = [];

	if (filterValue === "all") sortedItem = data?.dish;

	if (filterValue === "lightDish") sortedItem = data?.dish.filter((dish) => dish.type === "light");

	if (filterValue === "solidDish") sortedItem = data?.dish.filter((dish) => dish.type === "solid");

	if (query)
		sortedItem = sortedItem?.filter((dish) =>
			dish.name.toLowerCase().includes(query.toLowerCase())
		);

	function handleSubmit(e) {
		e.preventDefault();

		const newSearchParams = new URLSearchParams();

		if (filterValue !== "all") {
			newSearchParams.set("type", filterValue);
		}

		if (query) {
			newSearchParams.set("search", query);
		}
		setSearchParams(newSearchParams);
	}
	useEffect(() => {
		if (filterValue) {
			searchParams.set("type", filterValue);
			setSearchParams(searchParams);
		}
	}, [filterValue, searchParams, setSearchParams]);
	return (
		<div className="w-full px-1 lg:w-10/12 lg:mx-auto pt-24">
			<div className="flex flex-col gap-y-4 px-3 sm:px-14 lg:px-0 md:gap-y-0 md:flex-row justify-between mt-4 md:mt-10">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="border border-gray-300 rounded-lg py-2 px-5 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
						placeholder="Search"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</form>
				<Filter
					filterField="type"
					options={[
						{ id: 1, value: "all", label: "Choose type of food" },
						{ id: 2, value: "lightDish", label: "Light" },
						{ id: 3, value: "solidDish", label: "Solid" },
					]}
				/>
			</div>

			{isLoading ? (
				<PageSpinner />
			) : (
				<>
					{sortedItem?.length == 0 ? (
						<div className="text-center w-1/3 mx-auto px-12 py-12 shadow-xl shadow-orange-100 rounded-3xl my-20 text-2xl bg-orange-100">
							<p>😔 No result found</p>
						</div>
					) : (
						<div>
							{!isLoading ? (
								<InfiniteScroll
									dataLength={sortedItem?.length}
									next={handleSeeMore}
									hasMore={sortedItem?.length < data?.count ? true : false}
									loader={<Loader />}>
									<DishList
										items={sortedItem}
										render={(dish) => <DishItem key={dish.id} dish={dish} />}
									/>
								</InfiniteScroll>
							) : (
								<PageSpinner />
							)}
						</div>
					)}
					<div className="fixed bottom-10 right-8 z-50">
						{isVisible && (
							<Button type="round" onClick={scrollToTop}>
								<HiArrowUp />
							</Button>
						)}
					</div>
				</>
			)}
		</div>
	);
}
