import EasyToOrder from "/easy-to-order.svg";
import FastDelivery from "/fast-delivery.svg";
import Quality from "/quality.svg";

const ChooseUsData = [
	{
		id: 1,
		name: "Easy to order",
		content:
			"Delight in one-click, experience the ultimate convenience of ordering food with just one click, selecting your favorites at any time and from the comfort of your own space.",
		img: EasyToOrder,
	},
	{
		id: 2,
		name: "Fast delivery",
		content:
			"Swift and reliable food delivery right to your preferred location, at any day or time you desire.",
		img: FastDelivery,
	},
	{
		id: 3,
		name: "100% Quality",
		content:
			"Nourishing and delightful, our quality food is crafted to promote health, well-being, and the joy of sharing with your loved ones.",
		img: Quality,
	},
];

export default function WhyChooseUs() {
	
	return (
		<>
			<div className="w-full sm:px-0 lg:w-10/12 lg:mx-auto md:pt-16 pt-10 pb-3" id="whyChooseUs">
				<h1 className="text-center text-[2rem] text-orange-500 font-bold">Why choose us</h1>
				<p className="text-center text-lg">
					Enjoy the extraordinary - seamless food ordering,
					<br /> pure culinary delight, exclusively from us.
				</p>
				<div className="w-full bg-orange-100 mt-10 grid gap-11 py-11 px-8 lg:grid-cols-3 md:py-11">
					{ChooseUsData?.map((data) => (
						<div className="bg-white py-10 px-5 flex flex-col lg:items-center lg:px-10 gap-7" key={data.id}>
							<img src={data.img} alt={data.name} className="w-16 mx-auto" />
							<div className="text-center">
								<h1 className="font-bold text-2xl">{data.name}</h1>
								<p className="text-lg lg:text-sm mt-5">{data.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}