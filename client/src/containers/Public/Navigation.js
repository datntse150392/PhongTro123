import React from "react";

export default function Navigation() {
  return (
    <div className="w-screen h-[40px] bg-[#1266dd] text-white flex justify-center items-center mb-3">
      <ul className="h-[40px] w-full font-semibold text-[14px] flex items-center justify-center cursor-pointer">
        <li className="hover:bg-[#f73859] h-[40px] flex items-center px-3">
          Trang chủ
        </li>
        <li className="hover:bg-[#f73859] h-[40px] flex items-center px-3">
          Cho thuê phòng trọ
        </li>
        <li className="hover:bg-[#f73859] h-[40px] flex items-center px-3">
          Nhà cho thuê
        </li>
        <li className="hover:bg-[#f73859] h-[40px] flex items-center px-3">
          Cho thuê căn hộ
        </li>
        <li className="hover:bg-[#f73859] h-[40px] flex items-center px-3">
          Măt bằng, văn phòng
        </li>
        <li className="hover:bg-[#f73859] h-[40px] flex items-center px-3">
          Tìm người ở ghép
        </li>
        <li className="hover:bg-[#f73859] h-[40px] flex items-center px-3">
          Tin tức
        </li>
        <li className="hover:bg-[#f73859] h-[40px] flex items-center px-3">
          Bảng giá dịch vụ
        </li>
      </ul>
    </div>
  );
}
