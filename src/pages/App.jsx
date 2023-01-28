import React from "react";
import { Navbar } from "./Navbar";
import { Register } from "./Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { HomePage } from "./HomePage";

import { AuthProvider } from "../context/AuthContext";
import { PrivateRoute } from "../utils/PrivateRoute";
import { ClubPage } from "./ClubPage";
import { Footer } from "./Footer";

export const App = () => {
  return (
    <Router>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/Register" home element={<Register />} />
          <Route path="/" home element={<HomePage />} />
          <Route path="/ClubPage" home element={<ClubPage />} />

        </Route>
        <Route path="/Login" home element={<Login />} />
        <Route path="/Register" home element={<Register />} />
      </Routes>
     {/*<Footer/>*/}
    </AuthProvider>
    </Router>
  );
};
