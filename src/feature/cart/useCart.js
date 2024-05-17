import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";

export function useCart(){
    const { data:cart, isPending } = useQuery({
			queryKey: ["cart"],
			queryFn: getCart,
			retry: false,
		});
    return {cart, isPending}
}