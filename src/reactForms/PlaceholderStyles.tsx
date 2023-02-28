import styled from "@emotion/styled";

const Form = styled.form`
  width: 500px;
  height: 700px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
`;

const Input = styled.input`
  outline: none;
  font-size: 2rem;
  border: none;
  border-bottom: 2px solid green;
  padding: 0.3em;
  color: green;
  caret-color: blue;
  &::placeholder {
    color: lightgray;
  }
  &:placeholder-shown {
    color: blue;
    border: none;
    border-bottom: 2px solid blue;
    padding: 0.3em;
  }
  &:focus {
    border: none;
    border-bottom: 2px solid green;
    padding: 0.3em;
  }
`;

export default function BasicForm() {
  return (
    <Form>
      <label>
        <Input type={"text"} placeholder="First Name" />
      </label>
    </Form>
  );
}
