import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import DishItem from "./DishItem";
import DishList from "./DishList";
import useDish from "./useDish";
import Cookies from "js-cookie";

export default function HomeMenu() {
	const { data } = useDish();
	const navigate = useNavigate();
	const isAuthenticated = Cookies.get("authenticated");
	function handleSeeMore() {
		if (isAuthenticated === "authenticated") {
			navigate("/menus/all");
		} else {
			navigate("/auth/login");
		}
	}
	return (
		<div
			className="w-full px-1 lg:w-10/12 lg:mx-auto md:pt-16 pt-10 overflow-x-hidden pb-5"
			id="ourDishes">
			<h2 className="text-center text-[2rem] text-orange-500 font-bold">Our daily menu</h2>
			<p className="text-center text-lg">
				Embark on a Flavorful Adventure: Our Handpicked <br /> Today&apos;s Special: Chef&apos;s
				Signature Dish.
			</p>
			{/* TODO makes this dishes random */}
			<DishList
				items={data?.dish.slice(0, 6)}
				render={(dish) => <DishItem key={dish.id} dish={dish} />}
			/>
			<div className="flex flex-row justify-center items-center">
				<Button type="primary" onClick={handleSeeMore}>
					See more
				</Button>
			</div>
		</div>
	);
}
