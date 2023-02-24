import { useState, useEffect } from "react";
import Clock from "./Clock";

function useTime(): Date {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App(): JSX.Element {
  const time = useTime();
  return <Clock time={time} />;
}
