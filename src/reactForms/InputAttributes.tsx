import styled from "@emotion/styled";

const StyledForm = styled.form`
  width: 500px;
  height: 300px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
`;
const Input = styled.input`
  caret-color: blueviolet;
  font-size: 2rem;
  padding: 0.2em;
  &::placeholder {
  }
  &:placeholder-shown {
  }
  &:focus {
  }
`;

export default function Form() {
  return (
    <>
      <StyledForm>
        <label>
          <Input type="text" placeholder="First Name" id="firstName" />
        </label>
        <label>
          Without Autocomplete
          <Input
            type="text"
            placeholder="Last Name"
            id="lastName"
            required
            autoFocus
            autoComplete="off"
          />
        </label>
        <button>Submit</button>
      </StyledForm>
      <StyledForm autoComplete="off">
        <h3>Whole form without autocomplete</h3>
        <label>
          <Input type="text" placeholder="First Name" id="firstName" />
        </label>
        <label>
          <Input type="text" placeholder="Last Name" />
        </label>
        <button>Submit</button>
      </StyledForm>
    </>
  );
}
