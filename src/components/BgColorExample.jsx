import React from "react";

// function Card(){
//     return (<div>
//     <h1>TO DO LIST</h1>
//     <ul>
//         <li>Make laundry</li>
//         <li>Shopping</li>
//         <li>Clean bathroom</li>
//     </ul>
//     </div>);
// }

// export default Card;

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function BgColorExample() {

     

  return (
    <>
      {[
        {type:'Primary',
        dayOfWeek : 'Monday'},

        {type:'Secondary',
        dayOfWeek : 'Tuesday'},

        {type:'Success',
        dayOfWeek : 'Wensday'},

        {type:'Danger',
        dayOfWeek : 'Thursday'},

        {type:'Warning',
        dayOfWeek : 'Friday'},

        {type: 'Info',
        dayOfWeek : 'Saturday'},

        {type:'Dark',
        dayOfWeek : 'Sunday'}
      ].map((variant) => (
        <Card
          bg={variant.type.toLowerCase()}
          key={variant}
          text={variant.type.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
         
      
        >
          <Card.Header>{variant.dayOfWeek}</Card.Header>
          <Card.Body>
            <Card.Text>
            <ul>
              <li>gfgf</li>
              <li>ggf</li>
              <li>gfgf</li>
            </ul>
           
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      <Button variant="primary">Primary</Button>{' '}
    </>
  );
}

export default BgColorExample;