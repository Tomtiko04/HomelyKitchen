import ReactDOM from "react-dom";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/useUser";
import Cookies from "js-cookie";

export default function UserPannelInfo() {
	const userEmail = Cookies.get("userEmail");
	const {dispatch} = useUser()
	const navigate = useNavigate();
	function handleLogout() {
		const cookiesToRemove = ["authenticated", "userEmail", "userName", "userId"];

		cookiesToRemove.forEach((cookie) => Cookies.remove(cookie));

		dispatch({ type: "closePanel" });

		// window.location.reload();

		navigate("/home");
	}
	
	return ReactDOM.createPortal(
		<div className="fixed right-10 top-[95px] bg-white px-3 py-3 rounded-lg shadow z-50">
			<div className="flex flex-col justify-between gap-y-2">
				<div className="text-2xl flex justify-end">
					<VscClose className="cursor-pointer hover:text-orange-500" onClick={()=> dispatch({
			type: "closePanel",
		})} />
				</div>
				<div className="flex flex-row">
					<p className="text-gray-600 px-3 font-medium text-medium">{userEmail}</p>
				</div>
				<div
					onClick={handleLogout}
					className="flex flex-row items-center justify-center gap-x-1 cursor-pointer font-semibold text-orange-500">
					<HiArrowLeftStartOnRectangle className="text-2xl" />
					<p>Logout</p>
				</div>
			</div>
		</div>,
		document.querySelector("#userInfo")
	);
}
