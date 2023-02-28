import styled from "@emotion/styled";

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
  return (
    <StyledForm>
      <label>
        <Input type={"text"} placeholder="Name" />
      </label>
    </StyledForm>
  );
}
