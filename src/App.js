import React from "react";
import Header from "./components/Header";
import InputTesting from "./components/InputTesting";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="memeGenerator">
      <Header></Header>
      <Meme></Meme>
      {/* <InputTesting/> */}
    </div>
  );
}

export default App;
