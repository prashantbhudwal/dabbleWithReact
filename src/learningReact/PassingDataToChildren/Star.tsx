function Star({ isFilled, handleClick }: any): JSX.Element {
  const starUrl = isFilled
    ? `/src/Current/assets/star-filled.png`
    : `/src/Current/assets/star-empty.png`;
  return <img src={starUrl} onClick={handleClick} className="card--favorite" />;
}

export default Star;
