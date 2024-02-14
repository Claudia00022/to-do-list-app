import React, { useState } from "react";
import Cards from "./Cards";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import MainCard from "./MainCard";

import cardsarray from "../cardsarray";

import Row from "react-bootstrap/Row";

function App() {
  const [text, setText] = useState("To-Do-List");
  const [items, setItems] = useState(cardsarray);
  const [selectCard, setSelectedCard] = useState(null);






  function changeText(test) {
    setText(test);
  }

  function addItem(inputText) {
    if (!selectCard){
       alert("click button")
    } else{
       items[selectCard].values.push({
      id: items[selectCard].values.length + 1,
      val: inputText,
    });
    console.log(items);
    setItems([...items]);
    }
   
  }

  function deleteItem(id, index) {
    items[index].values = items[index].values.filter((item) => item.id !== id);
    setItems([...items]);
  }

  function handleSelectedCard(i) {
    setSelectedCard(i);
  }

  return (
    <div>
      <Header />
      <div className="heading mt-5">
        {" "}
        <h1 style={{ fontSize: "2rem" }}>Choose day</h1>
      </div>

      <Row className=" container mt-5 " style={{ margin: "auto" }}>
        {items.map((version) => {
          return (
            <Buttons
              key={version.id}
              variant={version.type}
              id={version.id}
              name={version.dayOfWeek}
              onAdd={changeText}
              cardId={handleSelectedCard}
              isTrue={selectCard === version.id}
              cardKey={selectCard}
            />
          );
        })}
      </Row>
      <MainCard title={text} onAddItem={addItem} />
      <Row
        className=" container mt-5 justify-content-center "
        style={{ margin: "auto" }}
      >
        {items.map((variant) => {
          return (
            <Cards
              titleOfCard={variant.dayOfWeek}
              bg={variant.type}
              key={variant.id}
              id={variant.id}
              text={variant.type === "light" ? "dark" : "white"}
              isBigger={selectCard === variant.id}
              values={variant.values}
              onDelete={deleteItem}
            />
          );
        })}
      </Row>
      <Footer />
    </div>
  );
}

export default App;
