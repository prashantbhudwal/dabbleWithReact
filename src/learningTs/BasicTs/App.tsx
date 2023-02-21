import "./App.css";
import TemplateComponent from "./Components/Component";

const basicTs = function () {
  // Use console Ninja Extension
  const message = "hello";
  message.toLowerCase();
  // message(); --> Helps catch this runtime

  const user = { name: "Daniel", age: 26 };
  user.location;

  const text = "Hello World";
  text.toLocalLowerCase;

  Math.random < 5;

  const randomFunc = Math.random;

  console.log(randomFunc());

  console.log("dog");

  const [a, b] = ["dog", 1];
  if (a === b) {
    ("Run this");
  }

  const wish = function explicitTypesExample(firstName: string, date: Date) {
    console.log(`Wish ${firstName} on ${date}`);
  };

  wish("Dog", new Date());

  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, illum.";

  console.log(lorem);
};

const allBasicTypes = function learnAllTheBasicTypesWithAnExample() {
  const printThis = function learnAllBasicTypes(
    a: number[],
    b: {
      name: string;
      shirtNo: number;
      stats: { goals: number; sledges: string[] };
    }
  ): string {
    return `This is what gets returned - ${a[1]} and ${b.name}`;
  };

  const argOne = [1, 2, 4];
  const argTwo = {
    name: "Doge",
    shirtNo: 2,
    stats: {
      goals: 3,
      sledges: ["You Cat!", "You punk!"],
    },
  };
  console.log(printThis(argOne, argTwo));
};
const optionalProperties = function () {
  const printName = function (name: { first: string; last?: string }) {
    const fullName: string = `${name.first} ${name.last?.toUpperCase()}`;
    return fullName;
  };
  const test = { first: "Doge" };
  console.log(printName(test));
};

function App() {
  basicTs();
  allBasicTypes();
  optionalProperties();
  return <>Nothing here. Run Console Ninja in Vs code.</>;
}
export default App;
