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
  &.radio {
    appearance: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;

    border: 2px solid #999;
    transition: 0.2s all linear;
    margin-right: 5px;

    position: relative;
    top: 4px;
  }
  &.radio:checked {
    border: 6px solid black;
  }
`;

export default function Form() {
  return (
    <StyledForm>
      <label>
        <Input type={"radio"} name={"radioSet"} defaultChecked></Input>
        <Input type={"radio"} name={"radioSet"}></Input>
        <Input type={"radio"} name={"radioSet"} className={"radio"}></Input>
      </label>
      <Input type={"checkbox"} name={"checkSet"} defaultChecked></Input>
      <Input type={"checkbox"} name={"checkSet"} className={"radio"}></Input>
    </StyledForm>
  );
}
