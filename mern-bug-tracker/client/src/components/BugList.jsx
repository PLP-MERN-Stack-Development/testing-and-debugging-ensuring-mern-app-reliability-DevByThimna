export default function BugList({ bugs }) {
  if (bugs.length === 0) return <p>No bugs reported.</p>;

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug._id}>{bug.title}</li>
      ))}
    </ul>
  );
}
