import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCart as deleteCartApi } from "../../services/apiCart"
import toast from "react-hot-toast"

export default function useDeleteCart() {
    const queryClient = useQueryClient()
    const {mutate: deleteCart, isPending: isDeleting} = useMutation({
        mutationFn: deleteCartApi,
        onSuccess: () => {
            toast.success("Item deleted from cart");
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            })
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })
  return {deleteCart, isDeleting}
}
