import styled from "@emotion/styled";

interface StyledBoxProps {
  isDark: boolean;
}

interface BoxProps {
  isDark: boolean;
  handleClick: any;
}

const StyledBox = styled.div<StyledBoxProps>`
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  border: 1px solid black;
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;
function Box({ isDark, handleClick }: BoxProps) {
  return <StyledBox isDark={isDark} onClick={handleClick}></StyledBox>;
}

export default Box;
