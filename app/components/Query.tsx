export default function Query({
  query,
}: {
  query: {
    key: string;
    value: string;
  }[];
}) {
  const queryLines = query.map((line) => {
    return (
      <>
        <span key={line.key}>{line.value}</span>
        <br />
      </>
    );
  });

  return (
    <div id="syntax-container">
      <p>
        {queryLines}
        <br />
      </p>
    </div>
  );
}
