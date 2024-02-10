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


 



  function changeText(test) {
    setText(test);
  }

  function addItem(inputText) {
    
   setItems( buttonWeek[selectedKey].values.push(inputText));
    console.log(buttonWeek)
    // setItems((prevItems) => {
    //   return [...prevItems, inputText];
    // });
  }


  const handleButtonClick = (index) => {
    setSelectedKey(index);
  };


  

  function pushArrayIntoObjects(){
    console.log(selectedKey);
    const updateArray = arrayOfObjects.map(obj => {
      console.log(obj.length - 1)
      if(selectedKey === obj.id){  return ({
      ...obj,
      values:[items]
    })}else{
      return  obj ;
      
    }
    });
 
    setArrayOfObjects(updateArray);
       console.log(arrayOfObjects)
       
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
            handleButtonClick = {handleButtonClick}
            
          />
        );
      })}
      <MainCard title={text} onAddItem={addItem} 
        />
      {arrayOfObjects.map((variant) =>{
        return <Cards 
        item={items}
        things = {variant.values}
        titleOfCard = {variant.dayOfWeek}
        bg={variant.type}
        key={variant.id}
        id= {variant.id}
        text={variant.type === "light" ? "dark" : "white"}
        isBigger={selectedKey === variant.id}
        // isCorrectCard = {selectedKey === variant.id}
        values = {variant.values}
       
      

     
     
        
         />  
      })}
      <Footer />
    </div>
  );
}

export default App;
