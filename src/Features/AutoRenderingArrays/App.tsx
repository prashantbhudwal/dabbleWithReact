import "./App.css";
import TemplateComponent from "./Components/Component";
const isBig: boolean = true; // <-- nothing rendered but no error
const name: string = "FirstName LastName";
const numbers: string[] = ["One", "Two", "Three"];
const numberObject = {
  numberOne: 1,
  numberTwo: 2,
  numberThree: 3,
};
const numberObjectWithArrays = {
  numberArrayOne: [{ one: 1 }, 2, 3, 4, 5, 6], // <-- This wont work, objects not valid as children
  numberArrayTwo: [7, 8, 9, 10, 11, 12],
};

console.log(numbers);

function App() {
  return <>{numbers}</>;
}
export default App;
