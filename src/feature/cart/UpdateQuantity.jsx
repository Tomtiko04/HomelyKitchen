import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../UI/Button";
import useUpdateCart from "./useUpdateCart";

export default function UpdateQuantity({dff, price, cartId}) {
	const [quantity, setQuantity] = useState(dff || 1);
	const { updateCart, isUpdating } = useUpdateCart();
	
	function handleDecrease(cartId) {
		if (quantity > 1) {
			setQuantity((prev) => {
				const newQuantity = prev - 1;
				updateCart({cartId, size: newQuantity, amount: price * newQuantity });
				return newQuantity;
			});
		}
	}

	function handleIncrease(cartId) {
		if (quantity >= 1) {
			setQuantity((prev) => {
				const newQuantity = prev + 1;
				updateCart({cartId, size: newQuantity, amount:  price * newQuantity})
				return newQuantity;
			});
		}
	}
	return (
		<>
			<div className="flex gap-2 items-center md:gap-3">
				<Button disabled={isUpdating} type="round" onClick={() => handleDecrease(cartId)}>
					-
				</Button>
				<span className="text-sm font-medium">{quantity}</span>
				<Button disabled={isUpdating} type="round" onClick={() => handleIncrease(cartId)}>
					+
				</Button>
			</div>
		</>
	);
}

UpdateQuantity.propTypes = {
	dff: PropTypes.any,
	price: PropTypes.any,
	cartId: PropTypes.any,
}
