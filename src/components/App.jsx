import React, { useState } from "react";
import Cards from "./Cards";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import MainCard from "./MainCard";
import buttonWeek from "../buttonWeek";





function App() {
  const [text, setText] = useState("To-Do-List");
  const [items, setItems] = useState([]);
  const [selectedKey, setSelectedKey] = useState(null);


  function changeText(test) {
    setText(test);
  }

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  const handleButtonClick = (index) => {
    setSelectedKey(index);
  };



  

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
            handleButtonClick = {handleButtonClick}
            
          />
        );
      })}
      <MainCard title={text} onAddItem={addItem} 
        />
      {buttonWeek.map((variant) =>{
        return <Cards 
        item={items}
        titleOfCard = {variant.dayOfWeek}
        bg={variant.type}
        key={variant.id}
        id= {variant.id}
        text={variant.type === "light" ? "dark" : "white"}
        isBigger={selectedKey === variant.id}
        isText = {selectedKey === variant.id}

     
     
        
         />  
      })}
      <Footer />
    </div>
  );
}

export default App;
