import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCart as clearCartApi } from "../../services/apiCart";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useDeleteAllCart() {
   const queryClient = useQueryClient();
   const navigate = useNavigate()
 const {mutate: isClearingAll, isPending: isClearing} = useMutation({
    mutationFn: clearCartApi,

    onSuccess: () => {
      toast.success("Payment was successful, your order is on it's way")
      navigate("/home");
      queryClient.invalidateQueries({
         queryKey: ['cart'],
      })
    },

    onError: (error) => {
      toast.error(error.message)
    }
 })

 return {isClearingAll, isClearing}
}
