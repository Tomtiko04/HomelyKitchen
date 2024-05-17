import { useEffect } from "react";
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


export default function ProtectedRoute({children}) {
    const isAuthenticated = Cookies.get("authenticated")
    const navigate = useNavigate()
 useEffect(function(){
    if(isAuthenticated === "authenticated");
     
    else {
        navigate("/auth/login")
    }
 }
 , [isAuthenticated, navigate, children])
 return isAuthenticated === "authenticated" ? children : null;
}

ProtectedRoute.propTypes = {
    children: PropTypes.any
}