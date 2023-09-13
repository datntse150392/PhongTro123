import React, { useCallback, useState } from "react";
import { Button, InputForm } from "../../components";
import { useNavigate } from "react-router-dom";
// path
import { path } from "../../ultils/constant";
// Call API
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";

// Check validation with yup
import { object, string, number, date, InferType } from "yup";
export default function Login() {
  // let userSchema = object({
  //   name: string().required(),
  //   age: number().required().positive().integer(),
  //   email: string().email(),
  //   website: string().url().nullable(),
  //   createdOn: date().default(() => new Date()),
  //   phone: number().required().positive().integer(),
  // });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goRegister = useCallback(() => {
    navigate(path.REGISTER);
  });

  const [payload, setPayload] = useState({
    phone: "",
    password: "",
  });

  // Xử lý event handle submit
  const handleSubmit = async () => {
    dispatch(actions.login(payload));
  };
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md">
      <h3 className="font-semibold text-3xl mb-[10px]">Đăng nhập</h3>
      <div className="w-full flex flex-col gap-3">
        <InputForm
          label={"Số điện thoại"}
          type={"text"}
          value={payload.phone}
          setValue={setPayload}
          name={"phone"}
        />
        <InputForm
          label={"Mật khẩu"}
          type={"password"}
          value={payload.password}
          setValue={setPayload}
          name="password"
        />
        <Button
          text={"Đăng nhập"}
          bgColor={"bg-[#3961fb]"}
          textColor={"text-white"}
          fullwidth
          onClick={handleSubmit}
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
