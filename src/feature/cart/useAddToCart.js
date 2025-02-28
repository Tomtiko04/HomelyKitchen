import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  AddToCartApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export default function useAddToCart() {
	const queryClient = useQueryClient();
	const {  mutate, isPending:isAdding } = useMutation({
		mutationFn: AddToCartApi,
		onSuccess: () => {
			toast.success("Item added to cart!");
			queryClient.invalidateQueries({
				queryKey: ["cart"],
			});
		},
		onError: (error) => toast.error(error.message),
	});
	return { mutate, isAdding };
}
