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
  const [arrayOfObjects, setArrayOfObjects] = useState(buttonWeek);


  const arrayToPush = items;



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


  

  function pushArrayIntoObjects(){
    console.log(selectedKey);
    const updateArray = arrayOfObjects.map(obj => {
      return ({
      ...obj,
      values:[...obj.values, ...arrayToPush]
    })});
 
    setArrayOfObjects(updateArray);
       console.log(arrayOfObjects)
  }



  

  return (
    <div>
      <Header />
      {arrayOfObjects.map((version) => {
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
      <MainCard title={text} onAddItem={addItem} onPush = {pushArrayIntoObjects}
        />
      {arrayOfObjects.map((variant) =>{
        return <Cards 
        item={arrayToPush}
        things = {variant.values}
        titleOfCard = {variant.dayOfWeek}
        bg={variant.type}
        key={variant.id}
        id= {variant.id}
        text={variant.type === "light" ? "dark" : "white"}
        isBigger={selectedKey === variant.id}
      

     
     
        
         />  
      })}
      <Footer />
    </div>
  );
}

export default App;
