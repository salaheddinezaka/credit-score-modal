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
      <span
        style={{
          fontFamily: "'Source Sans Pro, sans-serif', fontSize: 16px",
          fontWeight: "normal",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "1.38",
          letterSpacing: "normal",
          color: "#262630",
          display: "flex",
        }}
      >
        Credit Score
      </span>
      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        style={{
          borderRadius: "4px",
          border: "solid 1px #ced8d6",
          clear: "both",
          margin: "0",
          padding: "10px",
          position: "relative",
          width: "200px",
        }}
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
