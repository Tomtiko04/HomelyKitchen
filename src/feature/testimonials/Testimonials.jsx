import useTestimonials from "./useTestimonials";

export default function Testimonials() {
    const {testimonials} = useTestimonials()

  return (
		<div className="w-full sm:px-14 xl:px-[5.6em] md:pt-16 pt-10 px-5 pb-3" id="testimonials">
			<h1 className="text-center text-[2rem] text-orange-500 font-bold">Testimonials</h1>
			<p className="text-center text-lg">Client Testimonials: Hear What Our Customers Are Saying</p>
			<div className="w-full grid gap-3 mt-5 lg:grid-cols-3 lg:gap-x-8">
				{testimonials?.testimonials?.map((testimonial) => (
					<div className="py-5 px-0  flex flex-col lg:px-0 gap-0.5" key={testimonial.id}>
						<h3 className="font-semibold text-2xl">{testimonial.userName}</h3>
						<p className="font-medium text-base">{testimonial.state}</p>
						<p className="text-base mt-5 leading-8">{testimonial.review}</p>
					</div>
				))}
			</div>
		</div>
	);
}
