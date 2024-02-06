import React from "react";

import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <>
      <Card
        bg={props.bg}
        text={props.text}
        style={{
          width: "18rem",
        }}
        className="mb-2"
      >
        <Card.Header> {props.titleOfCard} </Card.Header>{" "}
        <Card.Body>
          <Card.Text>
            <ul>
              <li>{props.item}</li> <li> ggf </li> <li> gfgf </li>{" "}
            </ul>
          </Card.Text>{" "}
        </Card.Body>{" "}
      </Card>
    </>
  );
}

export default Cards;
