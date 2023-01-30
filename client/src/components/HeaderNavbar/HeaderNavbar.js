import React from "react";

export default function HeaderNavbar() {
  return (
    <nav className="py-2 px-2 flex justify-between bg-[#A4C2A5]">
      <img
        className="header-logo"
        src="https://via.placeholder.com/270x75?text=Logo+Image"
        style={{
          display: "block",
          height: "auto",
        }}
        alt=""
      />
    </nav>
  );
}
