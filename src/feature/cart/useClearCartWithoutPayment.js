import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCart as clearCartApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export default function useClearCartWithoutPayment() {
	const queryClient = useQueryClient();
	const { mutate: isClearingAll, isPending: isClearing } = useMutation({
		mutationFn: clearCartApi,

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["cart"],
			});
		},

		onError: (error) => {
			toast.error(error.message);
		},
	});

	return { isClearingAll, isClearing };
}
