import PropTypes from "prop-types"
import { formatCurrency } from "../../utils/helpers";
import UpdateQuantity from "./UpdateQuantity";
import Button from "../../UI/Button";
import useDeleteCart from "./useDeleteCart";
import PageSpinner from "../../UI/PageSpinner";

export default function CartItem({ item, isLoading }) {
	const { id, quantity, price, product_name, product_id, image, total_price } = item;
	const { deleteCart, isDeleting } = useDeleteCart();
	function handleDelete(productId) {
		deleteCart(productId);
	}

	return (
		<>
			{isLoading ? (
				<PageSpinner />
			) : (
				<li className="py-3 sm:flex sm:justify-between sm:items-center px-5 md:px-0">
					<div className="flex lg:flex-row lg:justify-center lg:items-center gap-x-5 flex-col">
						<div>
							<img className="w-24 h-24 rounded-full block" src={image} alt={product_name} />
						</div>
						<p className="mb-1 sm:mb-0">
							{quantity}&times; {product_name}
						</p>
					</div>

					<div className="flex items-center justify-between sm:gap-6">
						<p className="text-sm font-bold">{formatCurrency(total_price || price)}</p>
						<UpdateQuantity cartId={id} dff={quantity} price={price} />
						<Button type="round" disabled={isDeleting} onClick={() => handleDelete(product_id)}>
							DELETE
						</Button>
					</div>
				</li>
			)}
		</>
	);
}

CartItem.propTypes = {
    item: PropTypes.any,
	isLoading: PropTypes.any,
}
