import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CreditScoreModal from "./CreditScoreModal";
import DropDown from "./DropDown";
import "./index.css";
import { createScript } from "./utils";

const ZONE_ID = "7a6nx7";
const DATA_FILTER = "data-credit-score";


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  const handleSelectFilter = (filter) => {
    setFilterValue(filter);
    setShowModal(false);
    localStorage.setItem("credit-score", filter);
  };

  useEffect(() => {
    const offersDiv = document.getElementById("offers");
    if (offersDiv) {
      offersDiv.innerHTML = "";
    }
    let script;
    if (filterValue !== "") {
      script = createScript(ZONE_ID, DATA_FILTER, filterValue);
    } else {
      script = createScript(ZONE_ID);
    }
    offersDiv?.appendChild(script);
    const runTimeout = setTimeout(() => {
      if (filterValue === "") {
        setShowModal(true);
      }
      ReactDOM.render(
        <DropDown onChange={handleSelectFilter} />,
        document.getElementById("dropdown-credit-score")
      );
      console.log(filterValue || "null");
    }, 3000);

    return () => clearTimeout(runTimeout);
  }, [filterValue]);

  return (
    <>
      <CreditScoreModal
        show={showModal}
        selectValue={handleSelectFilter}
        closeHandler={() => setShowModal(false)}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
