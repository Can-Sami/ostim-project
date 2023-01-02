import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";


 export const PrivateRoute = () => {
    let {user} = useContext(AuthContext);
    console.log("test");
  return (
    !user ? <Outlet /> : <Navigate to="/Login" />
  );
};

