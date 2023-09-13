import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

export default function Rent() {
  return (
    <div className="w-full m-auto h-full flex flex-col items-center  ">
      <Header />
      <Navigation />
      <div className="w-1100 flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
