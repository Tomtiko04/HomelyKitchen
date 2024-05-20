import {  useQuery } from "@tanstack/react-query";
import { dishes as dishesApi } from "../../services/dishes";

function useDish(page){
    const { data, isLoading, error } = useQuery({
			queryKey: ["dishes"],
			queryFn: () => dishesApi(page),
			retry: false,
		});

    return {data, isLoading, error}
}

export default useDish;
