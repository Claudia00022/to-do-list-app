import React, { useState } from "react";
import Cards from "./Cards";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import MainCard from "./MainCard";
import buttonWeek from "../buttonWeek";

import Row from "react-bootstrap/Row";

function App() {
  const [text, setText] = useState("To-Do-List");
  const [items, setItems] = useState([]);
  const [selectedKey, setSelectedKey] = useState(null);


  function changeText(test) {
    setText(test);
  }

  function addItem(inputText) {
    setItems(buttonWeek[selectedKey].values.push(inputText));
    console.log(buttonWeek);
  }

  const handleButtonClick = (index) => {
    setSelectedKey(index);
  };

  

  return (
    <div>
      <Header />
      <div className="heading mt-5" > <h1 style={{fontSize: "2rem"}} >Choose day</h1></div>
     
      <Row className=" container mt-5 " style={{margin : "auto"}}>
      
          {buttonWeek.map((version) => {
            return (
              <Buttons
                key={version.id}
                variant={version.type}
                id={version.id}
                name={version.dayOfWeek}
                onAdd={changeText}
                handleButtonClick={handleButtonClick}
              />
            );
          })}
       
      </Row>
      <MainCard title={text} onAddItem={addItem} />
      <Row className=" container mt-5 justify-content-center " style={{margin : "auto"}}>
      {buttonWeek.map((variant) => {
        return (
          <Cards
            item={items}
            things={variant.values}
            titleOfCard={variant.dayOfWeek}
            bg={variant.type}
            key={variant.id}
            id={variant.id}
            text={variant.type === "light" ? "dark" : "white"}
            isBigger={selectedKey === variant.id}
            values = {variant.values}
          
          />
        );
      })}
      </Row>
      <Footer />
    </div>
  );
}

export default App;
