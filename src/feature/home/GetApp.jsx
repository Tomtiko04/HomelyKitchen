
export default function GetApp() {
  return (
		<div className="w-full sm:px-14 xl:px-[5.6em] md:pt-16 px-5 pb-3 pt-10">
			<h1 className="text-center text-[2rem] text-orange-500 font-bold">Get our mobile app</h1>
			<p className="text-center text-lg">Take your Experience to the Next Level.</p>
			<div className="flex flex-col flex-wrap justify-items-center justify-between lg:gap-y-4 lg:flex-row">
				<div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/1 mt-8">
					<p className=" text-xl leading-[40px] text-left md:text-center lg:text-left mt-3">
						Discover a healthier, more affordable alternative to takeaway food with our app. From
						spicy noodles to fresh salads, we &apos ll swiftly deliver to any corner of your city
						within just 30 minutes. Making smart choices has never been easier – whether you lead a
						busy life or relish the taste of home-cooked meals, our app is your ultimate solution.
					</p>
					{/* text-[1.45rem] */}
					<div className="flex flex-row justify-start items-start md:justify-center md:items-center  lg:justify-start lg:items-start mt-7 gap-x-5">
						<div>
							<img
								className="w-24 object-cover h-auto block"
								src="/app-store.svg"
								alt="Download on App Store"
							/>
						</div>
						<div>
							<img
								className="w-24 object-cover h-auto block"
								src="/play-store.svg"
								alt="Download on Google Play Store"
							/>
						</div>
					</div>
				</div>
				<div>
					<img
						className="max-w-md flex justify-center items-center object-cover h-auto mx-auto mt-10 overflow-hidden"
						src="/mobileapp.svg"
						alt="Mobile App"
					/>
				</div>
			</div>
		</div>
	);
}
