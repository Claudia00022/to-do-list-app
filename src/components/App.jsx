import React, { useState } from "react";
import BgColorExample from "./BgColorExample";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import MainCard from "./MainCard";
import buttonWeek from "../buttonWeek";

function App() {
  const [text, setText] = useState("To-Do-List");
  const [items, setItems] = useState([]);

  function changeText(test) {
    setText(test);
  }

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  return (
    <div>
      <Header />
      {buttonWeek.map((version) => {
        return (
          <Buttons
            key={version.id}
            variant={version.type}
            id={version.id}
            name={version.dayOfWeek}
            onAdd={changeText}
          />
        );
      })}
      <MainCard title={text} onAddItem={addItem} />
      <BgColorExample item={items} />
      <Footer />
    </div>
  );
}

export default App;
