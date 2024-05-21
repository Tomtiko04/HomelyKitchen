// import Modal from "../../UI/Modal";
//TODO On md screen center all the text
export default function About() {
  return (
		<div className="md:pt-16 pt-10 px-5 sm:px-14 xl:px-[5.6em] overflow-x-hidden" id="aboutUs">
			<div className="flex flex-col flex-wrap justify-items-center justify-between lg:gap-y-4 lg:flex-row overflow-x-hidden">
				<div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/1">
					<h1 className="text-black text-center lg:text-left font-medium lg:text-4xl text-[2rem] lg:leading-[70px] md:leading-[72px] leading-[70px]">
						About Us
					</h1>
					<p className="text-xl leading-[40px] text-left md:text-center lg:text-left">
						Welcome to The Homely, where we passionately prepare delicious and wholesome meals for
						busy individuals who crave the comforts of home-cooked food without the burden of
						cooking. Why bother with the kitchen when you can relish the same delightful flavors
						effortlessly? Treat yourself to the finest homemade dishes, wherever life takes you,
						because exceptional food is a joy that knows no boundaries!
					</p>
				</div>
				<div className="max-w-md object-cover h-auto mx-auto lg:mt-28 mt-10 hidden lg:block items-center">
					<img src="/about7.jpg" className="block" alt="About" />
				</div>
			</div>
		</div>
	);
}
