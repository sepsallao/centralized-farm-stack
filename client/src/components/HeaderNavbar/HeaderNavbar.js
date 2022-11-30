import React from "react";
import "./HeaderNavbar.css";

export default function HeaderNavbar() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://via.placeholder.com/270x75?text=Logo+Image"
        style={{
          display: "block",
          height: "auto",
        }}
        alt=""
      />
    </div>
  );
}
