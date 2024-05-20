// import { formatCurrency } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import PageSpinner from "../../UI/PageSpinner";
import { formatCurrency } from "../../utils/helpers";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useCart } from "./useCart";
// import { PaymentWithPaystack } from "../payment/paystack/config";
import PaywithFlutterwave from "../payment/paystack/flutterwave";

export default function CartList() {
  const { cart, isPending } = useCart();
  const navigate = useNavigate()
  const totalPrice = cart?.cart?.reduce((acc, item)=> {
	return (acc += item.total_price);
  }, 0 );

  return (
		<>
			{isPending ? (
				<PageSpinner />
			) : (
				<>
					{!cart?.cart.length == 0 ? (
						<>
							<ul className="divide-y divide-stone-200 border-b w-full lg:w-10/12 lg:mx-auto">
								<h1 className="text-2xl text-black font-bold py-5 text-center">
									Delicious in the cart
								</h1>
								{cart?.cart.map((item) => (
									<CartItem key={item.id} item={item} isLoading={isPending} />
								))}
							</ul>
							<p className="flex flex-row justify-end font-semibold pt-5 pb-3 w-full lg:w-10/12 lg:mx-auto px-5 md:px-0">
								Total Price: {formatCurrency(totalPrice)}
							</p>
							<div className="flex flex-row justify-end items-end gap-x-6 w-full lg:w-10/12 lg:mx-auto pt-3 py-8 px-5 md:px-0">
								<Button type="primary" onClick={() => navigate("/menus/all")}>
									Add more
								</Button>
								<PaywithFlutterwave />
							</div>
						</>
					) : (
						<EmptyCart />
					)}
				</>
			)}
		</>
	);
}
