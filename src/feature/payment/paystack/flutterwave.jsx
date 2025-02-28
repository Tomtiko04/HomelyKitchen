import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import Button from "../../../UI/Button";
import useDeleteAllCart from "../../cart/useClearCart";
import { useCart } from "../../cart/useCart";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export default function PaywithFlutterwave() {
	const { isClearingAll } = useDeleteAllCart();
	const { cart } = useCart();
	const userEmail = Cookies.get("userEmail");
	const amount = cart?.cart?.reduce((acc, item) => {
		return (acc += item.total_price);
	}, 0);
	console.log(amount);
	const config = {
		public_key: "FLWPUBK_TEST-b9f04f3d9353a57471ea22205a90f307-X",
		tx_ref: Date.now(),
		amount: amount,
		currency: "NGN",
		payment_options: "card,mobilemoney,ussd",
		customer: {
			email: userEmail,
		},
		customizations: {
			title: "HomelyKitchen",
			description: "Payment for items in cart",
			logo: "/logo.svg",
		},
	};

	const handleFlutterPayment = useFlutterwave(config);

	return (
		<Button
			type="primary"
			onClick={() => {
				handleFlutterPayment({
					callback: () => {
						closePaymentModal();
						isClearingAll();
					},
					onClose: () => {
						toast.error("Payment was initialized but never completed");
					},
				});
			}}>
			Order now
		</Button>
	);
}
