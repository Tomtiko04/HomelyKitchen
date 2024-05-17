import { useQuery } from "@tanstack/react-query"
import { counter as counterApi } from "../../services/counter"


function useCounter(){
   const {
			data: counterData,
			isPending,
			error,
		} = useQuery({
			queryKey: ["counter"],
			queryFn: counterApi,
			retry: false,
		});

   if(error) throw new Error(error.message)

   return {counterData, isPending}
}

export default useCounter