import styled from "@emotion/styled";
import React, { FormEventHandler } from "react";

const StyledForm = styled.form`
  font-family: Georgia, "Times New Roman", Times, serif;
  background-color: aliceblue;
  padding: 2em;
  border-radius: 1em;
  margin-top: 20px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const Input = styled.input`
  border-radius: 5px;
  border: none;
  padding: 0.3em;
  &::placeholder {
  }
  &:placeholder-shown {
  }
  &:focus {
  }
`;

export default function Form() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = function (event) {
    event.preventDefault();
    const form: any = event.target;
    const formData = new FormData(form);
    console.log(formData);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type={"text"}
        placeholder="First Name"
        id={"firstName"}
        name="remove name to test"
      />
      <Input type={"text"} placeholder="Last Name" id={"lastName"} />
      <Input type={"email"} placeholder="Email Address" id={"Email Address"} />
      <button type={"submit"}>Submit</button>
    </StyledForm>
  );
}
