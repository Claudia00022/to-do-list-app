import React from "react";

import Card from "react-bootstrap/Card";

function Cards(props) {

  return (
    <>
      <Card
      
        bg={props.bg}
        text={props.text}
        className="mb-2"
        style={{
        width: props.isBigger ? '250px' : '200px',
        height: props.isBigger ? '250px' : '200px',
        transition: 'width 0.3s, height 0.3s', // Add smooth transition effect
      
      }}
      >
        <Card.Header> {props.titleOfCard} </Card.Header>{" "}
        <Card.Body>
        <Card.Text>
      <ul>
      {props.item.map((todoItem) =>{
        return <li>
           { todoItem}
        </li>
      })}
      
      </ul> 

      
      </Card.Text>  
      
        </Card.Body>{" "}
      </Card>
    </>
  );
}

export default Cards;
