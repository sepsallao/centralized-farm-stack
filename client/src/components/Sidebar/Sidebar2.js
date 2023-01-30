import React, { useState } from "react";
import {
  HomeOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

export default function Sidebar2() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: <HomeOutlined /> },
    { title: "Inbox", src: <UnorderedListOutlined /> },
    { title: "Accounts", src: <UnorderedListOutlined />, gap: true },
    { title: "Schedule ", src: <UnorderedListOutlined /> },
    { title: "Search", src: <UnorderedListOutlined /> },
    { title: "Analytics", src: <UnorderedListOutlined /> },
    { title: "Files ", src: <UnorderedListOutlined />, gap: true },
    { title: "Setting", src: <PoweroffOutlined /> },
  ];

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-[#A4C2A5] h-screen p-1  pt-8 relative duration-300`}
    >
      <ArrowLeftOutlined
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#566246]
       border-2 rounded-full text-xl  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <h1
          className={`text-white origin-left font-medium text-2xl px-4 duration-200 ${
            !open && "scale-0"
          }`}
        >
          CIS
        </h1>
      </div>
      <ul className="pt-6 px-2">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-xl items-center gap-x-4
          ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-[#566246]"} `}
          >
            {Menu.src}
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
