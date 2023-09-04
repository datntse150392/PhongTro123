import React, { useCallback } from "react";
import logo from "../../assets/logo-phongtro.svg";
import { Button } from "../../components";
import { AiOutlinePlusCircle } from "react-icons/ai";
// Hook
import { useNavigate } from "react-router-dom";
// path
import { path } from "../../ultils/constant";
export default function Header() {
  const navigate = useNavigate();
  /*
  Sử dụng useCallback để tránh re-render không cần thiết
  */
  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  });
  return (
    <div className="w-1100 flex items-center justify-between">
      <img
        src={logo}
        alt="logo"
        className="w-[240px] h-[70px] object-contain"
      />
      <div className="flex flex-row items-center gap-2">
        <Button
          text={"Đăng nhập"}
          textColor={"text-white"}
          bgColor={"bg-blue-700"}
          onClick={goLogin}
        />
        <Button
          text={"Đăng ký"}
          textColor={"text-white"}
          bgColor={"bg-blue-700"}
        />
        <Button
          text={"Đăng tin mới "}
          textColor={"text-white"}
          bgColor={"bg-[#f73859]"}
          IcAfter={AiOutlinePlusCircle}
        />
      </div>
    </div>
  );
}
