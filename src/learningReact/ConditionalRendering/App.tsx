import styled from "@emotion/styled";
import { useState } from "react";

const StyledApp = styled.div``;

function App() {
  const [messages, setMessages] = useState(["a"]);

  return (
    <div>
      {messages.length
        ? `You have ${messages.length} unread message${
            messages.length > 1 ? "s" : ""
          }`
        : "You are all caught up!"}
    </div>
  );
}
export default App;
