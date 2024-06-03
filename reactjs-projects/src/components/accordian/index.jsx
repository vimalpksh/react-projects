import React from "react";
import { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  function handleSingleSelection(currId) {
    setSelected(currId === selected ? null : currId);
  }

  function handleMultipleSelection(currId) {
    let cpyMultiple = [...multiSelect];
    const findIndexOfCurrId = cpyMultiple.indexOf(currId);

    console.log(findIndexOfCurrId);
    if (findIndexOfCurrId === -1) {
      cpyMultiple.push(currId);
    } else {
      cpyMultiple.splice(findIndexOfCurrId, 1);
    }

    setMultiSelect(cpyMultiple);
  }

  console.log(selected);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiSelect.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
