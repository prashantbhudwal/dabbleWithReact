import "./App.css";
import jokes from "./jokes";
import Joke from "./Components/Component";

function App() {
  const jokeArray = jokes.map((joke) => <Joke jokeObject={joke} />);
  return <>{jokeArray}</>; // React auto-renders an array
}

// Shorter Version
//  const App = () => <>{jokes.map(joke=><Joke jokeObject ={joke}/>}</>)

export default App;
