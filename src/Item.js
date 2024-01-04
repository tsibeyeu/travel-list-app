export function Item({ propitem, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        onChange={() => onToggleItem(propitem.id)}
        type="checkbox"
        value={propitem.packed}
      ></input>
      <span style={propitem.packed ? { textDecoration: "line-through" } : {}}>
        {propitem.quantity}

        {propitem.description}
      </span>

      <button onClick={() => onDeleteItem(propitem.id)}>❌</button>
    </li>
  );
}
