import React from "react";

function MainCard(props) {
  return (
    <div className="list-container">
      <div className="heading">
        <h1>{props.title}</h1>
      </div>
      <div className="form">
        <input type="text" />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default MainCard;
