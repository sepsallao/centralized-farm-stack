import React from "react";
import MyRoutes from "../MyRoutes/MyRoutes";
// import Sidebar from "../Sidebar/Sidebar";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import Sidebar2 from "../Sidebar/Sidebar2";
export default function Layout2() {
  return (
    <div>
      <HeaderNavbar />
      <div className="flex">
        <div className="">
          <Sidebar2 />
        </div>
        <div className="h-screen flex-1 p-7">
          <MyRoutes />
        </div>
      </div>
    </div>
  );
}
