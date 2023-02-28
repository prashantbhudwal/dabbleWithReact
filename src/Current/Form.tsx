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
  const [firstName, setFirstName] = useState("");

  return (
    <StyledForm>
      <label>
        <Input
          type={"text"}
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
    </StyledForm>
  );
}
