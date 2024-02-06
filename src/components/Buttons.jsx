import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Buttons(props) {
  return (
    <Row className="mt-3" style={{ width: "50%", margin: "auto" }}>
      <>
        <Col>
          <Button
            variant={props.variant}
            onClick={() => {
              props.onAdd(props.name);
              props.handleButtonClick(props.id);
            }}
          >
            {props.name}
          </Button>{" "}
        </Col>
        <Col></Col>
      </>
    </Row>
  );
}

export default Buttons;
