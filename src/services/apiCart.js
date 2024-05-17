import Cookies from "js-cookie";
import supabase from "./supabase";

export async function getCart() {
	const id = Cookies.get("userId");

	let { data: cart, error } = await supabase.from("cart").select("*").eq("user_id", id);

	if (error) throw new Error(error.message);

	return { cart };
}

export async function AddToCartApi({
	quantity,
	price,
	product_name,
	user_id,
	user_name,
	product_id,
	image,
}) {
	const { data, error } = await supabase
		.from("cart")
		.insert([
			{
				quantity: quantity,
				price: price,
				product_name: product_name,
				user_id: user_id,
				user_name: user_name,
				product_id: product_id,
				image: image,
				total_price: price * quantity
			},
		])
		.select()
	if (error) throw new Error(error.message);

	return { data };
}

export async function updateCart({ size, amount, cartId }) {
	const { data, error } = await supabase.from("cart").update({ quantity: size, total_price: amount}).eq("id", cartId);
	if (error) throw new Error(error.message);
	return { data };
}

export async function deleteCart(productId){
	
const { data, error } = await supabase.from("cart").delete().eq("product_id", productId);

if (error) throw new Error(error.message);

return {data}

}

export async function clearCart(){
	const userId = Cookies.get("userId");
	
const { data, error } = await supabase.from("cart").delete().eq("user_id", userId);

if (error) throw new Error(error.message);

return { data };

}


