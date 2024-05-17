import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

 function GoToMenus() {
    const navigate = useNavigate();
    const isAuthenticated = Cookies.get("authenticated")
	useEffect(function(){
		if (isAuthenticated === "authenticated") {
			navigate("/menus/all");
		} else {
			navigate("/login");
		}
	},[isAuthenticated, navigate])
	return null;
}

