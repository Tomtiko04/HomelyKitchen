import Cookies from "js-cookie";

import { useUser } from "../../context/useUser";

import Button from "../../UI/Button";
import UserPannelInfo from "../../UI/UserPannelInfo";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const {state} = useUser();
	const navigate = useNavigate();
	const isAuthenticated = Cookies.get("authenticated");

	function handleOrderNow() {
		if (isAuthenticated === "authenticated") {
			navigate("/menus/all");
		} else {
			navigate("/auth/login");
		}
	}
  return (
		<section className="xl:pt-32 lg:pt-24 pt-24 pb-5 px-5 sm:px-14 xl:px-[5.6em]" id="home">
			<div className="flex flex-col gap-y-4 flex-wrap justify-items-center justify-between lg:flex-row">
				<div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/1">
					<h1 className="text-black font-medium text-[2.3rem] leading-[56px] xl:text-5xl xl:leading-[62px] lg:text-[2.4rem] lg:leading-[62px] md:text-[2.5rem] md:leading-[62px] ">
						Indulge in the
						<span className="text-orange-500 font-semibold">delectable</span>
						flavors of Nigeria, all in the
						<span className="text-orange-500 font-semibold">cozy</span> embrace of your own home!
					</h1>
					<p className="text-[1.09rem] mt-4">
						Unleash the delicious possibilities of convenient and wholesome cuisine, catering to
						your cravings anytime, anywhere!
					</p>
					<div className="flex justify-start items-start mt-5">
						<Button onClick={handleOrderNow} type="primary">
							Order now
						</Button>
					</div>
				</div>
				<div className="max-w-md h-auto mx-auto flex justify-center items-center">
					<img src="/hero-1.svg" alt="Hero-img" />
				</div>
			</div>
			<div>{state.openPanel && <UserPannelInfo />}</div>
		</section>
	);
}
