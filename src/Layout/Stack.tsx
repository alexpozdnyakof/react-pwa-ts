import "./Stack.scss";

function Stack({times }: Partial<{ times: number; nested: boolean }>) {
  const defaultProps = {
    times: 8,
    nested: false,
  };

  return (
    <div className="stack">
      {[...new Array(times ?? defaultProps.times)]
        .fill(undefined)
        .map(() => (
          <div className="box" />
        ))}
    </div>
  );
}

export { Stack };
