import React from "react";
import { Navbar } from "./Navbar";
import { Register } from "./Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { HomePage } from "./HomePage";

import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./utils/PrivateRoute";

export const App = () => {
  return (
    <Router>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/Register" home element={<Register />} />
          <Route path="/" home element={<HomePage />} />
        </Route>
        <Route path="/Login" home element={<Login />} />
      </Routes>
    </AuthProvider>
    </Router>
  );
};
