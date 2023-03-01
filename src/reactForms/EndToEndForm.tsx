import styled from "@emotion/styled";
import { useState } from "react";

const StyledApp = styled.div`
  .form-container {
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form {
    background-color: white;
    padding: 50px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.75);
  }

  .form--input {
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 5px;
    font-family: "Inter", sans-serif;
  }

  .form--submit {
    width: 50%;
    padding: 10px;
    border-radius: 5px;
    color: white;
    background-color: #639;
    border: none;
    cursor: pointer;
  }

  .form--marketing {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
  }

  .form--marketing > input {
    margin-right: 10px;
  }
`;

export default function Form() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    okayToEmail: false,
  });

  const handleChange = (event: any) => {
    const { name, value, checked, type } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <StyledApp>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="form--input"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="form--input"
            name="password"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="form--input"
            name="confirmPassword"
            onChange={handleChange}
          />

          <div className="form--marketing">
            <input
              id="okayToEmail"
              type="checkbox"
              name="okayToEmail"
              onChange={handleChange}
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>
          <button className="form--submit">Sign up</button>
        </form>
      </div>
    </StyledApp>
  );
}
