import { useState } from "react";
import './App.css';
import QuoteBox from "./components/QuoteBox";
import db from "./db/quotes.json";
import images from  "./db/img.json";

const arrayColors = ["#b59da4","#c8ad8d","#f86f6f","#6aa3b4","#15ab92","#1e91ed"];


const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex];
};

function App() {
  const [quote, setQuote] = useState(getRandom(db));
  
  const [color, setColor] = useState(getRandom(arrayColors));

  const [background, setBackground] = useState(getRandom(images));

  const newQuote = () => {
    setQuote(getRandom(db));
    setColor(getRandom(arrayColors));
    setBackground(getRandom(images));
  }
  
  console.log(background);
  return (
    <div className="App" style={ {backgroundImage: `url(${background.src})`}} >
      <QuoteBox 
      quote={quote} 
      newQuote={newQuote} 
      color={color} 
      />  
    </div>
  );
}

export default App;
