import styled from "@emotion/styled";

interface ClockProps {
  time: Date;
}

const StyledClock = styled.div`
  .day {
    background: #2ff;
    color: #222;
  }
  .night {
    background: #202;
    color: #fff;
  }
`;

export default function Clock({ time }: ClockProps): JSX.Element {
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = "night";
  } else {
    className = "day";
  }
  return (
    <StyledClock>
      <h1 className={className}>{time.toLocaleTimeString()}</h1>
    </StyledClock>
  );
}
