import React from "react";
import { Menu, ConfigProvider } from "antd";
import {
  HomeOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div style={{ minWidth: "15%", backgroundColor: "#A4C2A5" }}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#566246",
          },
        }}
      >
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
              //post signout
            } else {
              navigate(key);
            }
          }}
          defaultSelectedKeys={[window.location.pathname]}
          items={[
            { label: "Home", key: "/home", icon: <HomeOutlined /> },
            { label: "login TEST", key: "/", icon: <HomeOutlined /> },
            {
              label: "Item 1",
              key: "/element1",
              icon: <HomeOutlined />,
              children: [
                {
                  label: "Subitem 1",
                  key: "/subelement1",
                  icon: <UnorderedListOutlined />,
                },
                {
                  label: "Subitem 2",
                  key: "/subelement2",
                  icon: <UnorderedListOutlined />,
                },
              ],
            },
            { label: "Item 3", key: "/element2", icon: <HomeOutlined /> },
            {
              label: "Sign Out",
              key: "signout",
              icon: <PoweroffOutlined />,
              danger: true,
            },
          ]}
          style={{ backgroundColor: "#A4C2A5" }}
        ></Menu>
      </ConfigProvider>
    </div>
  );
}
