import { useQuery } from "@tanstack/react-query";
import { testimonials as testimonialsApi } from "../../services/testimonials";

function useTestimonials(){
    const {
			data: testimonials,
			isPending,
			error,
		} = useQuery({
			queryKey: ["testimonials"],
			queryFn: testimonialsApi,
		});

return { testimonials, isPending, error };
}

export default useTestimonials