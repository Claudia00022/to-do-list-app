import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function Buttons(props) {
  return (
    <>
      <Col className="col text-center list-text-style">
        <Button 
        className=" bg-opacity-50"
        variant={props.variant}
          
          style={{ width: "130px" }}
          onClick={() => {
            props.onAdd(props.name);
            props.handleButtonClick(props.id);
            props.cardId(props.id);
          }}
        >
          {props.name}
        </Button>{" "}
      </Col>
    </>
  );
}

export default Buttons;
