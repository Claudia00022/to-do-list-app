import React, { useState } from "react";
import BgColorExample from "./BgColorExample";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import MainCard from "./MainCard";
import buttonWeek from "../buttonWeek";

function App() {
  const [text, setText] = useState("To-Do-List");

  function changeText(test) {
    setText(test);
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
      <MainCard title={text} />
      <BgColorExample />
      <Footer />
    </div>
  );
}

export default App;
