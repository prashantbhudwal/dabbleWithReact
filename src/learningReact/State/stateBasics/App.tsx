import "./App.css";
import { useState } from "react";

function App() {
  const [things, setThings] = useState(["Thing 1", "Thing 2"]);
  console.log(things);
  // console.log(useState(["Thing 1", "Thing 2"]))
  function addItem() {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]);
    console.log(things);
    console.log(setThings);
  }

  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}
export default App;

// function App() {
//   const thingsArray = ["Thing 1", "Thing 2"];

//   function addItem() {
//     const newThingText = `Thing ${thingsArray.length + 1}`;
//     thingsArray.push(newThingText);
//     console.log(thingsArray);
//   }

//   const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

//   return (
//     <div>
//       <button onClick={addItem}>Add Item</button>
//       {thingsElements}
//     </div>
//   );
// }
