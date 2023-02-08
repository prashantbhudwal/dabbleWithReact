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

export default Basics;
export { NestedList };
