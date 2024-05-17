import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCart as updateCartApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export default function useUpdateCart() {
	const queryClient = useQueryClient();
	const {
		mutate: updateCart,
		isPending: isUpdating,
	} = useMutation({
		mutationFn: updateCartApi,
		onSuccess: () => {
			toast.success("Cart updated");
			queryClient.invalidateQueries({
				queryKey: ["cart"],
			});
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	return { updateCart, isUpdating };
}
