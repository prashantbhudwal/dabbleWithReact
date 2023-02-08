import Button from "../Components/Button/Button";
import "./Basics.css";

const Basics = function learnBasicsOfReact() {
  return (
    <div className="mainDiv">
      <p className="doggyLog">A dog is logged!</p>
    </div>
  );
};

const NestedList = function () {
  return (
    <div>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <Button />
    </div>
  );
};

const TestingJSX = function () {
  const button = (
    <div>
      <h1>This is a button!</h1>
      <Button />
    </div>
  );
  console.log(button);
  return button;
};

export default Basics;
export { NestedList, TestingJSX };
