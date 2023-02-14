import "./index.css";
function Joke({ jokeObject }: any) {
  return (
    <div className="cardContainer">
      <div className="setup">{jokeObject.setup}</div>
      <div className="punchline">{jokeObject.punchline}</div>
    </div>
  );
}

export default Joke;
