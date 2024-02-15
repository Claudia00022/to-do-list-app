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
          style={{
            width: props.isBiggerButton ? "130px" : "100px",
            transition: "width 0.3s, height 0.3s",
          }}
          onClick={() => {
            props.onAdd(props.name);
            props.onButton(props.id);
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
