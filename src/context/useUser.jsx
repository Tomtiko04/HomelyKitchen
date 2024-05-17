import { useContext } from "react";
import { UserContext } from "./userContext";


function useUser() {
	const context = useContext(UserContext);
	if (context === undefined) throw new Error("UserContext was used outside of the UserProvider");
	return context;
}

export {useUser}
