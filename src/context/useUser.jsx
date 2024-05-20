import { useContext } from "react";
import { UserDetailsContext } from "./userDetailsContext";


function useUser() {
	const context = useContext(UserDetailsContext);
	if (!context) throw new Error("UserContext was used outside of the UserProvider");
	return context;
}

export {useUser}
