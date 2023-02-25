import styled from "@emotion/styled";
import { useState } from "react";
import Star from "./Star";

const StyledApp = styled.div`
  main {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    width: 200px;
    border: 1px solid lightgray;
    border-radius: 10px;
    height: 350px;
    box-shadow: 5px 5px 5px 1px rgba(120, 120, 120, 0.44);
    -webkit-box-shadow: 5px 5px 5px 1px rgba(120, 120, 120, 0.44);
    -moz-box-shadow: 5px 5px 5px 1px rgba(120, 120, 120, 0.44);
  }

  .card--image {
    width: 100%;
    padding: 10%;
    padding-bottom: 0;
  }

  .card--name {
    margin-block: 13px;
    color: #333333;
  }

  .card--info {
    padding: 10px;
  }

  .card--favorite {
    width: 25px;
    cursor: pointer;
  }

  .card--contact {
    font-size: 0.75rem;
    color: gray;
    margin-block: 7px;
  }
`;
function App() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <StyledApp>
      <main>
        <article className="card">
          <img src="/src/Current/assets/user.png" className="card--image" />
          <div className="card--info">
            <Star
              handleClick={toggleFavorite} //Usually NOT named onClick to make it clear that it is a custom prop.
              isFilled={contact.isFavorite}
            ></Star>
            <h2 className="card--name">{contact.firstName}</h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
          </div>
        </article>
      </main>
    </StyledApp>
  );
}
export default App;
