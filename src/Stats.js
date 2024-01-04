export function Stats({ item }) {
  if (!item.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );
  }
  const numItem = item.length;
  const numpacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((numpacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `Ready to go`
          : `💼 You have ${numItem} items on your list, and already packed ${numpacked}
        (${percentage}%)`}
      </em>
    </footer>
  );
}
