import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { json, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
    } else {
      alert("Kullanıcı adı veya şifre hatalı");
    }

    let logoutUser = () => {
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem("authTokens");
      navigate("/Login");
    };
    let contextData = {
      user: user,
      loginUser: loginUser,
      logoutUser: logoutUser,
    };

    return (
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    );
  };
};
