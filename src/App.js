import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackageList } from "./PackageList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(newitem) {
    setItems((items) => [...items, newitem]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirm = window.confirm("Are you sure to delete all items?");
    if (confirm) setItems([]);
  }
  return (
    <>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackageList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats item={items} />
    </>
  );
}

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: true },
];
