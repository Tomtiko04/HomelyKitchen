import { LiaInstagram } from "react-icons/lia";
import { LiaTwitter } from "react-icons/lia";
import { LiaFacebookF } from "react-icons/lia";
export default function Footer() {
	let date = new Date().getFullYear();
	return (
		<div className="bg-[rgb(255,148,102)] text-white mt-5 w-full overflow-x-hidden">
			<div className=" mx-auto px-5 sm:px-14 xl:px-[5.6em] pt-6 pb-24">
				<div className="max-w-7xl grid gap-y-5 mt-10 md:grid-cols-3 md:gap-x-5">
					<div className="flex flex-col md:px-0 md:py-0 gap-y-4">
						<img className="w-28" src="/logo.svg" alt="Homely" />
						<p className="text-base">
							Solution for easy and flexible getting meals for the household. You can trust us
							anywhere through this platform
						</p>
						<p>© {date} Made with ❤ by Ogunney Oyinkansola</p>
					</div>
					<div className=" flex flex-col md:px-0 md:py-0 gap-y-0 md:ml-32">
						<h1 className="font-medium text-[2.1rem]">About</h1>
						<ul className="py-3 md:py-0">
							<li className="text-lg mb-4">
								<a href="/">Our Company</a>
							</li>
							<li className="text-lg mb-4">
								<a href="/">Career</a>
							</li>
							<li className="text-lg mb-4">
								<a href="/"> Investor Relations</a>
							</li>
							<li className="text-lg mb-0 md:mb-4">
								<a href="/">Public Service</a>
							</li>
						</ul>
					</div>
					<div className=" flex flex-col md:px-0 md:py-0 md:ml-32 gap-y-0">
						<h1 className="font-medium text-[2.1rem]">Social</h1>
						<div className="py-3 md:py-0">
							<LiaInstagram className="mb-4 font-bold text-4xl cursor-pointer hover:text-orange-500" />
							<LiaTwitter className="mb-4 font-bold text-4xl cursor-pointer hover:text-orange-500" />
							<LiaFacebookF className="mb-4 font-bold text-4xl cursor-pointer hover:text-orange-500" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
