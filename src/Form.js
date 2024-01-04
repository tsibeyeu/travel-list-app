import { useState } from "react";

export function Form({ onAddItem }) {
  const [description, setDesciption] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    //GUARD CLOUSE
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItem(newItem);
    setDesciption("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😎 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDesciption(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}
