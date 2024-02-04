import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ButtonsDays() {
  const buttonWeek = [
    { id: 0, type: "primary", dayOfWeek: "Monday" },

    { id: 1, type: "secondary", dayOfWeek: "Tuesday" },

    { id: 2, type: "success", dayOfWeek: "Wensday" },

    { id: 3, type: "danger", dayOfWeek: "Thursday" },

    { id: 4, type: "warning", dayOfWeek: "Friday" },

    { id: 5, type: "info", dayOfWeek: "Saturday" },

    { id: 6, type: "dark", dayOfWeek: "Sunday" },
  ];

  return (
    <Row className="mt-3" style={{ width: "50%", margin: "auto" }}>
      {buttonWeek.map((version) => (
        <>
          <Col>
            <Button variant={version.type} id={version.id}>
              {version.dayOfWeek}
            </Button>{" "}
          </Col>
          <Col></Col>
        </>
      ))}
    </Row>
  );
}

export default ButtonsDays;
