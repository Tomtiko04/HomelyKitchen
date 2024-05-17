import {  useLocation, useNavigate } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { LiaCartPlusSolid, LiaUserCircle } from "react-icons/lia";
import { useUser } from "../context/useUser";
import Button from "./Button";
import { useCart } from "../feature/cart/useCart";
import Cookies from "js-cookie";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState(window.location.hash);
	const navigate = useNavigate();
	const location = useLocation();
	const isMenusPage = location.pathname === "/menus/all" || location.pathname === "/cart";
	const { cart } = useCart();
	const { dispatch } = useUser();
	const isAuthenticated = Cookies.get("authenticated");

	console.log(isOpen);

	useEffect(function () {
		const checkScreenSize = () => {
			if (window.innerWidth >= 1024) {
				setIsOpen(false);
			} else {
				setIsOpen(true);
			}
		};
		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	// useEffect(() => {
	// 	const handleHashChange = () => {
	// 		setActiveLink(window.location.hash);
	// 	};
	// 	window.addEventListener("hashchange", handleHashChange);
	// 	return () => {
	// 		window.removeEventListener("hashchange", handleHashChange);
	// 	};
	// }, []);

	useEffect(() => {
		const handleHashChange = () => {
			setActiveLink(window.location.hash);
		};
		window.addEventListener("hashchange", handleHashChange);
		if (window.location.hash) {
			const id = window.location.hash.replace("#", "");
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView();
			}
		}
		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	// useEffect(() => {
	// 	const sections = document.querySelectorAll("section");
	// 	const navLinks = document.querySelectorAll("nav a");

	// 	const observer = new IntersectionObserver(
	// 		(entries) => {
	// 			entries.forEach((entry) => {
	// 				if (entry.isIntersecting) {
	// 					const id = entry.target.getAttribute("id");
	// 					const activeLink = document.querySelector(`nav a[href="#${id}"]`);
	// 					navLinks.forEach((link) => link.classList.remove("active"));
	// 					activeLink.classList.add("active");
	// 				}
	// 			});
	// 		},
	// 		{ threshold: 0.1 }
	// 	);

	// 	sections.forEach((section) => observer.observe(section));

	// 	return () => {
	// 		sections.forEach((section) => observer.unobserve(section));
	// 	};
	// }, []);

	/////////////////////////////////////together with this
	// useEffect(() => {
	// 	const observer = new IntersectionObserver(
	// 		(entries) => {
	// 			entries.forEach((entry) => {
	// 				if (entry.isIntersecting) {
	// 					setActiveLink("#" + entry.target.id);
	// 				}
	// 			});
	// 		},
	// 		{ threshold: 0.1 }
	// 	);

	// 	const sections = document.querySelectorAll("section");
	// 	sections.forEach((section) => observer.observe(section));

	// 	return () => {
	// 		sections.forEach((section) => observer.unobserve(section));
	// 	};
	// }, []);

	////////////////////////////////////////////with this
	// useEffect(() => {
	// 	const section = document.querySelector(activeLink);
	// 	if (section) {
	// 		section.scrollIntoView({ behavior: "smooth" });
	// 	}
	// }, [activeLink]);


	return (
		<nav className="bg-orange-100 fixed top-0 w-full z-50">
			<div className="max-w-7xl mx-auto px-5 sm:px-14 xl:px-[5.6em]">
				<div className="flex flex-col lg:flex-row justify-between py-[14px]">
					<div className="flex justify-between items-center lg:mb-0">
						<img
							src="/logo.svg"
							onClick={() => navigate("/home")}
							className="cursor-pointer"
						/>
						<div
							className="lg:hidden block text-[2.5rem] text-black"
							onClick={() => setIsOpen(!isOpen)}>
							<HiBars3BottomRight />
						</div>
					</div>
					<div className={isOpen ? "hidden" : "block"}>
						<ul className="lg:flex lg:justify-between lg:items-center lg:flex-row flex flex-col mt-3 lg:mt-0 lg:gap-x-0 lg:gap-y-0 gap-y-2">
							<li
								className={
									activeLink === "#home"
										? "text-orange-500 hover:opacity-75 text-base font-semibold lg:px-4 lg:hover:bg-transparent sm:hover:bg-orange-500 p-2 lg:p-0 rounded-md"
										: "text-black hover:opacity-75 text-base font-semibold lg:px-4 lg:hover:bg-transparent sm:hover:bg-orange-500 p-2 lg:p-0 rounded-md"
								}>
								<a href="#home" onClick={() => {setActiveLink("#home"); setIsOpen(!isOpen)}}>
									Home
								</a>
							</li>
							{!isMenusPage && (
								<>
									<li
										className={
											activeLink === "#whyChooseUs"
												? "text-orange-500 hover:opacity-75 text-base font-semibold lg:px-4 lg:hover:bg-transparent sm:hover:bg-orange-500 p-2 lg:p-0 rounded-md"
												: "text-black hover:opacity-75 text-base font-semibold lg:px-4 lg:hover:bg-transparent sm:hover:bg-orange-500 p-2 lg:p-0 rounded-md"
										}>
										<a href="#whyChooseUs" onClick={() => {setActiveLink("#whyChooseUs");
										setIsOpen(!isOpen);}}>
											Why choose us
										</a>
									</li>
									<li
										className={
											activeLink === "#ourDishes"
												? "text-orange-500 hover:opacity-75 text-base font-semibold lg:px-4 lg:hover:bg-transparent sm:hover:bg-orange-500 p-2 lg:p-0 rounded-md"
												: "text-black hover:opacity-75 text-base font-semibold lg:px-4 lg:hover:bg-transparent sm:hover:bg-orange-500 p-2 lg:p-0 rounded-md"
										}>
										<a href="#ourDishes" onClick={() => {setActiveLink("#ourDishes"); setIsOpen(!isOpen)}}>
											Our Dishes
										</a>
									</li>
									<li
										className={
											activeLink === "#aboutUs"
												? "text-orange-500 hover:opacity-75 text-base font-semibold lg:px-4 lg:hover:bg-transparent sm:hover:bg-orange-500 p-2 lg:p-0 rounded-md"
												: "text-black hover:opacity-75 text-base font-semibold lg:px-4 lg:hover:bg-transparent sm:hover:bg-orange-500 p-2 lg:p-0 rounded-md"
										}>
										<a href="#aboutUs" onClick={() => {setActiveLink("#aboutUs"); setIsOpen(!isOpen)}}>
											About us
										</a>
									</li>
									<li
										className={
											activeLink === "#testimonials"
												? "text-orange-500 hover:opacity-75 text-base font-semibold lg:px-4 lg:hover:bg-transparent sm:hover:bg-orange-500 p-2 lg:p-0 rounded-md"
												: "text-black hover:opacity-75 text-base font-semibold lg:px-4 lg:hover:bg-transparent sm:hover:bg-orange-500 p-2 lg:p-0 rounded-md"
										}>
										<a href="#testimonials" onClick={() => {setActiveLink("#testimonials"); setIsOpen(!isOpen)}}>
											Testimonials
										</a>
									</li>
								</>
							)}
							{!isAuthenticated && (
								<div className="lg:flex lg:justify-between lg:flex-row lg:items-center lg:gap-x-4 lg:gap-y-0 lg:ml-2 space-y-3 lg:space-y-0">
									<button
										className="bg-orange-500 px-5 py-2 block text-white rounded-lg text-center text-base  transition-colors duration-300 focus:bg-orange-100 focus:text-black focus:outline-none focus:ring focus:ring-orange-300 focus:ring-offset-2 font-semibold"
										onClick={() => navigate("/auth/login")}>
										Login
									</button>
									<button
										className="bg-orange-500 px-5 py-2 block text-white rounded-lg text-center text-base  transition-colors duration-300 focus:bg-orange-100 focus:text-black focus:outline-none focus:ring focus:ring-orange-300 focus:ring-offset-2 font-semibold"
										onClick={() => navigate("/auth/signup")}>
										Register
									</button>
								</div>
							)}
							{isAuthenticated === "authenticated" && (
								<div className="flex justify-start my-3 lg:block lg:my-0">
									<Button type="primary" onClick={() => {navigate("/cart"); setIsOpen(!isOpen)}}>
										<div className="flex flex-row gap-x-1">
											<LiaCartPlusSolid className="text-2xl" />
											Cart
											<p className="text-black bg-white rounded-full w-7 h-7 text-lg text-center ml-1">
												{Array.isArray(cart?.cart) ? cart?.cart.length : 0}
											</p>
										</div>
									</Button>
								</div>
							)}
							{isAuthenticated === "authenticated" && (
								<div
									className="text-orange-500 text-[4rem] lg:text-[3.1rem] cursor-pointer lg:ml-5"
									onClick={() =>
										dispatch({
											type: "getDetails",
										})
									}>
									<LiaUserCircle />
								</div>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

{
	/* // TODO text-[#171717] */
}
