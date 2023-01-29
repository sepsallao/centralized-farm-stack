import React from "react";
import MyRoutes from "../MyRoutes/MyRoutes";
import Sidebar from "../Sidebar/Sidebar";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
export default function Layout2() {
  return (
    <div>
      <HeaderNavbar />
      <div
        style={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}
      >
        <Sidebar />
        <div className="main-content">
          <MyRoutes />
        </div>
      </div>
    </div>
  );
}
