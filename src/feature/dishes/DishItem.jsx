import { formatCurrency } from "../../utils/helpers.js";
import PropTypes from "prop-types";
import useAddToCart from "../cart/useAddToCart.js";
import Button from "../../UI/Button.jsx";
import { useEffect, useState } from "react";
import useDeleteCart from "../cart/useDeleteCart.js";
import { useCart } from "../cart/useCart.js";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

export default function DishItem({ dish }) {
	const id = dish?.id
	const {cart} = useCart();
	const { mutate, isAdding } = useAddToCart();
	const { deleteCart, isDeleting } = useDeleteCart();
	const cartCheck = cart?.cart;

	const [isAdded, setIsAdded] = useState(false);
	// const navigate = useNavigate("");

	const userid = Cookies.get("userId");
	const userName = Cookies.get("userName");
	const isAuthenticated = Cookies.get("authenticated");

	function handleClickAdd(quantity, price, product_name, user_id, user_name, product_id, image) {
		if(isAuthenticated) {
		mutate({ quantity, price, product_name, user_id, user_name, product_id, image });
		setIsAdded(!isAdded);
		} else {
			toast.error("Login to Add Item to Cart.")
			// navigate("/auth/login");
		}
	}

	function handleClickDelete(product_id) {
		if(isAuthenticated) {
			deleteCart(product_id);
			setIsAdded(!isAdded);
		} else{
			toast.error("Item can't be removed from cart")
		}
	}

	useEffect(function(){
		function checkCart(){
			const isItemInCart = cartCheck?.some((item) => item.product_id === id);
			setIsAdded(isItemInCart);
		}

		checkCart();
	}, [cartCheck, setIsAdded, id])

	return (
		<>
			<div
				className="flex flex-col items-center gap-5 border border-b-orange-300 lg:border-orange-300 py-10 lg:p-10"
				key={dish?.id}>
				<div className="w-[250px] h-[250px]">
					<img
						src={dish?.image}
						alt={dish?.name}
						className="block object-cover rounded-full w-[250px] h-[250px]"
					/>
				</div>
				<p className="font-semibold text-2xl lg:text-2xl">{dish?.name}</p>
				<div className="flex items-center gap-8 sm:gap-32 lg:gap-12">
					<p className="font-medium text-2xl">{formatCurrency(dish?.price)}</p>
					<div className="flex items-center">
						{!isAdded ? (
							<Button
								type="small"
								disabled={isAdding}
								onClick={() =>
									handleClickAdd(
										1,
										dish?.price,
										dish?.name,
										userid,
										userName,
										dish?.id,
										dish?.image
									)
								}>
								+ Add
							</Button>
						) : (
							<Button
								type="small"
								disabled={isDeleting}
								onClick={() => handleClickDelete(dish?.id)}>
								- Remove
							</Button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

DishItem.propTypes = {
	dish: PropTypes.any,
};
