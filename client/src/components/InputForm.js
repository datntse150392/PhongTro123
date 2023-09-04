import React, { memo } from "react";
const InputForm = ({ label, type }) => {
  return (
    <div>
      <label htmlFor="phone" className="text-2sm">
        {label}
      </label>
      <input
        type={type}
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
      />
    </div>
  );
};

export default memo(InputForm);
