import React from "react";
import { Button, InputForm } from "../../components";
export default function Login() {
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md">
      <h3 className="font-semibold text-3xl mb-[10px]">Đăng nhập</h3>
      <div className="w-full flex flex-col gap-3">
        <InputForm label={"Số điện thoại"} type={"text"} />
        <InputForm label={"Mật khẩu"} type={"password"} />
        <Button
          text={"Đăng nhập"}
          bgColor={"bg-[#3961fb]"}
          textColor={"text-white"}
          fullwidth
        />
        <div className="mt-[10px] flex items-center justify-between">
          <small className="text-[blue] hover:text-[red] text-[15px] cursor-pointer">
            Bạn quên mật khẩu?
          </small>
          <small className="text-[blue] hover:text-[red] text-[15px] cursor-pointer">
            Bạn quên mật khẩu?
          </small>
        </div>
      </div>
    </div>
  );
}
