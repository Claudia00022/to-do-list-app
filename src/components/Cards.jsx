import React, {useState} from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Cards(props) {

  const [list, updateList] = useState(props.values)

function deletItem(value){

  console.log(list, 'c')
  let temp = list.filter(function(item) {
    return item !== value
})
  updateList(temp
     )

}

  return (
    <>
      <Col className="col-4 text-center d-flex justify-content-center">
        <Card
          bg={props.bg}
          // text={props.text}
          className={`mb-3 bg-${props.variant}.bg-gradiant  bg-opacity-75`}
          style={{
            width: props.isBigger ? "350px" : "300px",
            height: props.isBigger ? "450px" : "400px",
            transition: "width 0.3s, height 0.3s", // Add smooth transition effect
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
                {list.map((todoItem) => {
                  return (
                    <div
              
                      
                    >
                      <li
                        className="list-text-style"
                        style={{ color: "white" }}
                        onClick={()=>deletItem(todoItem)}
                      >
                        {todoItem.val}{" "}
                      </li>
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
