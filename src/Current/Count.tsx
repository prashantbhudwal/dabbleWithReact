function Count({ count }: { count: number }): JSX.Element {
  return (
    <div className="counter--count">
      <h1>{count}</h1>
    </div>
  );
}

export default Count;
