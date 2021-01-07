import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CreditScoreModal from "./CreditScoreModal";
import "./index.css";
import { createScript } from "./utils";

const ZONE_ID = "us0vdk";
const DATA_FILTER = "data-credit-score";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  const handleSelectFilter = (filter) => {
    setFilterValue(filter);
    setShowModal(false);
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
      if(filterValue === ''){
        setShowModal(true);
      }
      console.log(filterValue)
    }, 2000);

    return () => clearTimeout(runTimeout);
  }, [filterValue]);

  return <CreditScoreModal show={showModal} selectValue={handleSelectFilter} closeHandler={() => setShowModal(false)} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
