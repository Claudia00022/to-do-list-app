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
  // const [selectCard, setSelectedCard] = useState(null);

 

    const handleButtonClick = (index) => {
    setSelectedKey(index);
  };

  function changeText(test) {
    setText(test);
  }

  function addItem(inputText) {
    const arr = buttonWeek[selectedKey].values;
    setItems(arr.push({ id: arr.length + 1 ,val:inputText}));
    console.log(arr)
  }


   
  // function handleSelectedCard(i){
  //   setSelectedCard(i)
  // }


  

  // function deleteItem(deletedItem) {
  //   const arr =  buttonWeek[selectedKey].values
  //   const update = arr.filter(a => a.id !== deletedItem );
  //   setItems(update);
  //   console.log(update)
  // }
  

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
      {buttonWeek.map((variant, index) => {
        return (
          <Cards
            item={items}
            titleOfCard={variant.dayOfWeek}
            bg={variant.type}
            key={index}
            id={index}
            text={variant.type === "light" ? "dark" : "white"}
            isBigger={selectedKey === variant.id}
            values = {variant.values}
            // onDelete = {deleteItem}
            // onSelected = {handleSelectedCard}
          //  
      
          
          />
        );
      })}
      </Row>
      <Footer />
    </div>
  );
}

export default App;
