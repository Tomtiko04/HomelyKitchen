import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import { useUser } from "../context/useUser";
import UserPannelInfo from "./UserPannelInfo";

export default function AppLayout() {
	const { openPanel } = useUser()
	return (
		<div>
			<Header />
			{openPanel && <UserPannelInfo />}
			<Outlet />
			<Footer />
		</div>
	);
}
