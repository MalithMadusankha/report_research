import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import Interview from "./views/Interview";
import reportWebVitals from "./reportWebVitals";
import Summery from "./views/Summery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/interview" element={<Interview />} />
      <Route path="/summery" element={<Summery />} />
      <Route path="/" element={<Navigate replace to="/interview" />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
