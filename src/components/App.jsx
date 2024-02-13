import React, { useState } from "react";
import Cards from "./Cards";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import MainCard from "./MainCard";
import buttonWeek from "../buttonWeek";
import cardsarray from "../cardsarray";

import Row from "react-bootstrap/Row";

function App() {
  const [text, setText] = useState("To-Do-List");
  const [items, setItems] = useState([]);
  const [selectedKey, setSelectedKey] = useState(null);
  const [selectCard, setSelectedCard] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedKey(index);
  };

  function changeText(test) {
    setText(test);
  }

  function addItem(inputText) {
    let newItem = cardsarray[selectCard].values.push({
      id: cardsarray[selectCard].values.length + 1,
      val: inputText,
    });
    setItems(newItem);
  }

  function deleteItem(index) {
    setItems((prevItems) => {
      const temp = cardsarray[selectCard].values;
      temp.splice(index - 1, 1);
      return { ...prevItems, temp };
    });
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
        {buttonWeek.map((version) => {
          return (
            <Buttons
              key={version.id}
              variant={version.type}
              id={version.id}
              name={version.dayOfWeek}
              onAdd={changeText}
              handleButtonClick={handleButtonClick}
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
        {cardsarray.map((variant) => {
          return (
            <Cards
              titleOfCard={variant.dayOfWeek}
              bg={variant.type}
              key={variant.id}
              id={variant.id}
              text={variant.type === "light" ? "dark" : "white"}
              isBigger={selectedKey === variant.id}
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
