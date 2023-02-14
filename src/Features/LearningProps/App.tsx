import "./App.css";
import Contact from "./Components/Contact";
import ContactPropLess from "./Components/ContactPropLess";
import TestContact from "./Components/TestContact";

const cats = [
  {
    name: "Mr Whiskerson",
    imageUrl: "/src/Features/Template/images/mr-whiskerson.png",
    phoneNo: "555-1234",
    email: "mr.whiskaz@catnap.meow",
  },
  {
    name: "Mrs Fluffykins",
    imageUrl: "/src/Features/Template/images/fluffykins.png",
    phoneNo: "655-1234",
    email: "mr.fluffy@catnap.meow",
  },
  {
    name: "Mrs Pumpkin",
    imageUrl: "/src/Features/Template/images/pumpkin.png",
    phoneNo: "755-1234",
    email: "mr.pumper@catnap.meow",
  },
  {
    name: "Mr Felix",
    imageUrl: "/src/Features/Template/images/felix.png",
    phoneNo: "855-1234",
    email: "mr.fella@catnap.meow",
  },
];

function App() {
  return (
    <div className="contacts">
      <Contact catData={cats[0]} />
      <Contact catData={cats[1]} />
      <Contact catData={cats[2]} />
      <Contact catData={cats[3]} />
      <TestContact catData={cats[1]} />
      <ContactPropLess />
    </div>
  );
}

export default App;
