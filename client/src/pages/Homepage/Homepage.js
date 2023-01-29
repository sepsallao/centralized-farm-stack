import React from "react";
import { Input, ConfigProvider } from "antd";

const { Search } = Input;

export default function Homepage() {
  const onSearch = (value) => console.log(value);
  return (
    <div className="searchbar">
      <img
        src="https://via.placeholder.com/500x75?text=Logo+Banner"
        style={{
          margin: "20px auto",
          display: "block",
          width: "100%",
        }}
        alt=""
      />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#566246",
          },
        }}
      >
        <Search
          placeholder="Search a keyword"
          enterButton="Search"
          size="large"
          allowClear
          onSearch={onSearch}
        />
      </ConfigProvider>
    </div>
  );
}
