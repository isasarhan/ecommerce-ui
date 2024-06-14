import React from "react";

const CheckboxB = ({ label, value, name, number }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        id={name}
      />
      <label className="form-check-label" for={name}>
        {label} {number ? `(${number})` : ""}
      </label>
    </div>
  );
};

export default CheckboxB;
