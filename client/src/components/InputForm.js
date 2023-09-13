import React, { memo } from "react";
const InputForm = ({ label, type, value, setValue, name }) => {
  return (
    <div>
      <label htmlFor="phone" className="text-2sm">
        {label}
      </label>
      <input
        type={type}
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
        value={value}
        onChange={(e) =>
          setValue((pre) => ({ ...pre, [name]: e.target.value }))
        }
      />
    </div>
  );
};

export default memo(InputForm);
