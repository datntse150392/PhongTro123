import React, { useCallback } from "react";
import { Button, InputForm } from "../../components";
import { useNavigate } from "react-router-dom";
// path
import { path } from "../../ultils/constant";
export default function Login() {
  const navigate = useNavigate();
  const goRegister = useCallback(() => {
    navigate(path.REGISTER);
  });
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
          <a
            className="text-[blue] hover:text-[red] text-[15px] cursor-pointer"
            onClick={goRegister}
          >
            Tạo tài khoản mới
          </a>
        </div>
      </div>
    </div>
  );
}
