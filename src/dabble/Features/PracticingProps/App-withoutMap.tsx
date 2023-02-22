import "./App.css";
import jokes from "./jokes";
import Joke from "./Components/Component";
function App() {
  return (
    <>
      <Joke jokeObject={jokes[0]} />
      <Joke jokeObject={jokes[1]} />
      <Joke jokeObject={jokes[2]} />
      <Joke jokeObject={jokes[3]} />
      <Joke jokeObject={jokes[4]} />
    </>
  );
}
export default App;
