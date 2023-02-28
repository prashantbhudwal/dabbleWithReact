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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(formData.firstName, formData.lastName);

  const handleChange = function (event: any) {
    console.log(event.target.name);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: [event.target.value],
    }));
  };

  return (
    <StyledForm>
      <label>
        <Input
          type={"text"}
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        <Input
          type={"text"}
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        <Input
          type={"email"}
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
    </StyledForm>
  );
}
