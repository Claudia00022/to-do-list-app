import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";





function Cards(props) {
  return (
    <>
      <Col className="col-4 text-center d-flex justify-content-center">
        <Card
          bg={props.bg}
          className={`mb-3 bg-${props.variant}.bg-gradiant  bg-opacity-75`}
          style={{
            width: props.isBigger ? "350px" : "300px",
            height: props.isBigger ? "450px" : "400px",
            transition: "width 0.3s, height 0.3s",
            color: "black",
          }}
        >
          <Card.Header className="list-text-style">
            {" "}
            {props.titleOfCard}{" "}
          </Card.Header>{" "}
          <Card.Body>
            <Card.Text>
              <ul>
                {props.values.map((todoItem) => {
                  return (
                    <div className="container-fluid  row ">
                      <li
                        idLi={todoItem.id}
                        className=" col-6 list-text-style"
                        style={{ color: "white" }}
                      >
                        {todoItem.val}{" "}
                      </li>
                      <button
                        className="col-6 text-muted"
                        onClick={() => {
                          props.onDelete(todoItem.id, props.id);
                        }}
                      >
                        {" "}
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  );
                })}
              </ul>
            </Card.Text>
          </Card.Body>{" "}
        </Card>
      </Col>
    </>
  );
}

export default Cards;
