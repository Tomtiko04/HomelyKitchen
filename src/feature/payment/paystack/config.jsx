import toast from "react-hot-toast";
import { usePaystackPayment } from "react-paystack";
import Button from "../../../UI/Button";
import { useCart } from "../../cart/useCart";
import Cookies from "js-cookie";

export const PaymentWithPaystack = () => {
	const {cart} = useCart();
	const userEmail = Cookies.get("userEmail")
	const totalAmount = cart?.cart?.reduce((acc, item)=> {
		return acc+= item.price
	}, 0)
	const config = {
		reference: new Date().getTime().toString(),
		email: userEmail,
		amount: totalAmount * 100,
		publicKey: "pk_test_235741831bf969e7dbdc3d71cde2d93a41de5aca",
	};
	
	const onSuccess = (reference) => {
		console.log(reference)
		toast.success("Payment successful");
	};

	const onClose = () => {
		toast.error("Payment dialog closed");
	};

	const initializePayment = usePaystackPayment(config);
	return (
		<Button type="primary"
			onClick={() => {
				initializePayment(onSuccess, onClose);
			}}>
			Order now
		</Button>
	);
};

// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { usePaystackPayment } from "react-paystack";
// import Button from "../../../UI/Button";
// import { useCart } from "../../cart/useCart";
// import useDeleteAllCart from "../../cart/useClearCart";

// export const PaymentWithPaystack = () => {
// 	const { cart } = useCart();
// 	const { isClearingAll } = useDeleteAllCart();
// 	const userEmail = Cookies.get("userEmail");
// 	const totalAmount = cart?.cart?.reduce((acc, item) => {
// 		return (acc += item.price);
// 	}, 0);
// 	const config = {
// 		reference: new Date().getTime().toString(),
// 		email: userEmail,
// 		amount: totalAmount * 100,
// 		publicKey: "pk_test_235741831bf969e7dbdc3d71cde2d93a41de5aca",
// 	};

// 	const onSuccess = (reference) => {
// 		console.log(reference);
// 		toast.success("Payment successful");
// 		console.log("big deal");
// 		isClearingAll();
// 	};

// 	const onClose = () => {
// 		toast.error("Payment dialog closed");
// 	};

// 	const initializePayment = usePaystackPayment(config);

// 	const [hasAccess, setHasAccess] = useState(false);

// 	useEffect(() => {
// 		async function checkStorageAccess() {
// 			if (!document.hasStorageAccess) {
// 				setHasAccess(true);
// 			} else {
// 				const access = await document.hasStorageAccess();
// 				setHasAccess(access);
// 			}
// 		}
// 		checkStorageAccess();
// 	}, []);

// 	const handleOrderNowClick = async () => {
// 		if (!hasAccess && document.requestStorageAccess) {
// 			const access = await document.requestStorageAccess();
// 			setHasAccess(access);
// 		}
// 		if (hasAccess) {
// 			initializePayment(onSuccess, onClose);
// 		}
// 	};

// 	return (
// 		<Button type="primary" onClick={handleOrderNowClick}>
// 			Order now
// 		</Button>
// 	);
// };
