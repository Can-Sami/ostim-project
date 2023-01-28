import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { Navbar } from './pages/Navbar';
import { Register } from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

