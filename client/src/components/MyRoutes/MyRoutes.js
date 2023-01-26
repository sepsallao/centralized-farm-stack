import React from "react";
import Login from "../../pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
}
