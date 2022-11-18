import React from "react";
import Login from "../../pages/Login/Login";
import { Route, Routes } from "react-router-dom";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
