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

  .radioContainer {
    display: flex;
    gap: 1em;
  }

  .ratingRadio {
    width: 1.5em;
    height: 1.5em;
  }

  .ratingRadio:hover {
    background-color: blue;
  }
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
  const [formState, setFormState] = useState({
    fullName: "",
    rating: "0",
    isRated: true,
  });

  console.log(formState.fullName, formState.rating, formState.isRated);

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
      //Doing this will give and error [name]: type === "checkbox" ? [checked] : [value],
    }));
  };

  return (
    <StyledForm>
      <Input
        type={"text"}
        placeholder="Full Name"
        name="fullName"
        onChange={handleRatingChange}
        value={formState.fullName}
      />
      <label className="radioContainer">
        Your Ratings
        <br />
        <Input
          type={"radio"}
          name="rating"
          id="rating__one"
          value={1}
          className="ratingRadio"
          onChange={handleRatingChange}
          checked={formState.rating === "1"}
        ></Input>
        <Input
          type={"radio"}
          name="rating"
          id="rating__two"
          value={2}
          className="ratingRadio"
          onChange={handleRatingChange}
          checked={formState.rating === "2"}
        ></Input>
        <Input
          type={"radio"}
          name="rating"
          id="rating__three"
          value={3}
          className="ratingRadio"
          onChange={handleRatingChange}
          checked={formState.rating === "3"}
        ></Input>
      </label>
      <button type="submit">Submit Rating</button>
    </StyledForm>
  );
}
