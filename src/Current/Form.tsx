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
      <div>Dog</div>
      <label>
        {" Primary Email"}
        <Input
          type={"text"}
          placeholder="Tedt"
          list="awards"
          // defaultValue={primaryEmail}
        />
        {/* <datalist id={"awards"}>
          <select defaultValue={"test"}>{emailOptions}</select>
        </datalist> */}
      </label>
    </StyledForm>
  );
}
