import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";


export default function EmptyCart() {
    const navigate = useNavigate()
	return (
		<div className="flex flex-col items-center justify-center gap-y-5 mb-12">
			<img className="block w-36" src="/empty.png" />
			<p>Oops, your cart is currently empty!</p>
			<p>No items found in your cart. Tap the button below to explore our menu!</p>
			<Button type="primary" onClick={() => navigate("/menus/all")}>
				Check menu
			</Button>
		</div>
	);
}
