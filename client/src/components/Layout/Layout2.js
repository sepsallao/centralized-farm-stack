import React from "react";
import { Menu, Button } from "antd";
import MyRoutes from "../MyRoutes/MyRoutes";
import "./Layout.css";
import { HomeOutlined, PoweroffOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
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
