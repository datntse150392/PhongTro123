import React, { useCallback, useState } from "react";
import { Button, InputForm } from "../../components";
import { useNavigate } from "react-router-dom";
// path
import { path } from "../../ultils/constant";
// CALL REDUX
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /*
  Sử dụng useCallback để tránh re-render không cần thiết
  */
  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  });
  // State payload
  const [payload, setPayload] = useState({
    name: "",
    password: "",
    phone: "",
  });
  // Function submit form
  const handleSubmit = async () => {
    dispatch(actions.register(payload));
  };
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md">
      <h3 className="font-semibold text-3xl mb-[10px]">Tạo tài khoản mới</h3>
      <div className="w-full flex flex-col gap-3">
        <InputForm
          label={"Họ tên"}
          type={"text"}
          value={payload.name}
          setValue={setPayload}
          name={"name"}
        />
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
          name={"password"}
        />
        <Button
          text={"Tạo tài khoản"}
          bgColor={"bg-[#3961fb]"}
          textColor={"text-white"}
          fullwidth
          onClick={handleSubmit}
        />
        <div className="mt-5 flex flex-col  justify-between">
          <small className="text-[15px] cursor-pointer">
            Bấm vào nút đăng ký tức là bạn đã đồng ý với
            <a className="hover:text-[red] text-[blue]"> quy định sử dụng </a>
            của chúng tôi
          </small>
          <small className=" text-[15px] cursor-pointer mt-5">
            Bạn đã có tài khoản?
            <a className="hover:text-[red] text-[blue]" onClick={goLogin}>
              {" "}
              Đăng nhập ngay
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
