import React, { useEffect, useState } from "react";

const DropDown = ({ onChange }) => {
  const [value, setValue] = useState("excellent");
  useEffect(() => {
    const savedValue = localStorage.getItem("credit-score");
    if (savedValue) {
      setValue(savedValue);
    }
  }, []);
  return (
    <div class="pages__navigator">
      <span>Credit Score</span>
      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      >
        <option value="excellent">Excellent (720-850)</option>
        <option value="good">Good (690-719)</option>
        <option value="fair">Fair (630-689)</option>
        <option value="poor">Poor (350-629)</option>
      </select>
    </div>
  );
};

export default DropDown;
