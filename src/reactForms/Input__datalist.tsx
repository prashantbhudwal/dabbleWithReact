import styled from "@emotion/styled";
import { useState } from "react";

const StyledForm = styled.form`
  width: 500px;
  height: 700px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
`;

const Input = styled.input`
  &::placeholder {
  }
  &:placeholder-shown {
  }
  &:focus {
  }
`;

export default function Form() {
  const [emailArray, setEmailArray] = useState([
    { primary: "A@gmail.com" },
    { secondary: "B@gmail.com" },
  ]);

  const optionsArray = emailArray.map((email) => {
    const emailKey = Object.keys(email)[0];
    const emailValue = email[emailKey];
    return <option key={emailKey} value={emailValue}></option>;
  });


  const primaryEmail = emailArray.find(
    (email) => Object.keys(email)[0] === "primary"
  )?.primary;

  return (
    <StyledForm>
      <label>
        {" Primary Email"}
        <Input
          type={"text"}
          placeholder="Test"
          list="awards"
          defaultValue={primaryEmail}
        />
        <datalist id={"awards"}>
          <select>{optionsArray}</select>
        </datalist>
      </label>
    </StyledForm>
  );
}
