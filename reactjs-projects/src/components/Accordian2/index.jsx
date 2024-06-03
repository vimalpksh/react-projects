import React from "react";
import data from "./data";
import { useState } from "react";
import "./Twod.css";

const AccordianTwo = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currId) {
    return setSelected(currId === selected ? null : currId);
  }
  return (
    <div className="wrapperTwo">
      <button>Multi Selection Enable</button>
      <div className="accordianTwo">
        {data && data.length > 0
          ? data.map((dataItem) => {
              return (
                <div className="itemTwo">
                  <div
                    onClick={() => handleSingleSelection(dataItem.id)}
                    className="titleTwo"
                  >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {selected === dataItem.id ? (
                    <div className="contentTwo">{dataItem.answer}</div>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AccordianTwo;
