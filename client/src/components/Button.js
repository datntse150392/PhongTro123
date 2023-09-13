import React, { memo } from "react";
const Button = ({
  text,
  textColor,
  bgColor,
  IcAfter,
  onClick,
  fullwidth,
  IcBefore,
}) => {
  return (
    <div>
      <button
        type="button"
        className={`py-2 px-4 ${textColor} ${bgColor} ${
          fullwidth && "w-full"
        } outline-none rounded-md hover:underline flex items-center justify-center gap-1 `}
        onClick={onClick}
      >
        <span>{IcBefore && <IcBefore />}</span>
        <span>{text}</span>
        <span>{IcAfter && <IcAfter />}</span>
      </button>
    </div>
  );
};

export default memo(Button);
// rafe: phím nhanh tạo Button
