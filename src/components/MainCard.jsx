import React, { useState } from "react";

function MainCard(props) {
  const [inputText, setInputText] = useState("");

  function changeHandle(event) {
    const newItem = event.target.value;
    setInputText(newItem);
  }

  return (
    <div className="list-container">
      <div className="heading">
        <h1> {props.title} </h1>{" "}
      </div>{" "}
      <div className="form">
        <input
          type="text"
          value={inputText}
          placeholder="Title"
          onChange={changeHandle}
        />{" "}
        <button
          onClick={() => {
            props.onAddItem(inputText);
            setInputText("");
          
          }}
        >
          <span> Add </span>{" "}
        </button>{" "}
      </div>
    </div>
  );
}

export default MainCard;
