import React from "react";
import { Input, ConfigProvider } from "antd";

const { Search } = Input;

export default function Homepage() {
  const onSearch = (value) => console.log(value);
  return (
    <div className=" md:m-20">
      <img
        src="https://via.placeholder.com/500x75?text=Logo+Banner"
        className="mx-1 my-2 block rounded-md w-screen"
        alt=""
      />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#a4c2a5",
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
