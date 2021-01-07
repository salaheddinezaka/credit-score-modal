import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createScript } from "./utils";

const ZONE_ID = "idaq0b";
const DATA_FILTER = "data-opeid";

const App = () => {
  useEffect(() => {
    const offersDiv = document.getElementById("offers");
    if (offersDiv) {
      offersDiv.innerHTML = "";
    }
    const script = createScript(ZONE_ID);
    offersDiv?.appendChild(script);
  }, []);

  return (
    <div className="container">
      <h1>Hello</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
