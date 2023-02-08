import Button from "../Components/Button/Button";
import "./Basics.css";

function Basics() {
  return (
    <div className="mainDiv">
      <p className="doggyLog">A dog is logged!</p>
    </div>
  );
}

function NestedList() {
  return (
    <div>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <Button />
    </div>
  );
}

function TestingJSX() {
  const button = (
    <div>
      <h1>This is a button!</h1>
      <Button />
    </div>
  );
  console.log(button);
  return button;
}

function JSXNavBar() {
  const navBar = (
    <nav>
      <h1>DogeShack</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );

  return navBar;
}

export default Basics;
export { NestedList, TestingJSX, JSXNavBar };
