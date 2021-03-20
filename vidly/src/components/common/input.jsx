import React from "react";

const Input = (name, label, value, onChange) => {
  return (
    <div className="form-grop">
      <lable htmlFor={name}>{label}</lable>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
