import { ToDoItem } from "../App";

type AddItemButtonProps = {
  list: ToDoItem[];
  title: string;
  setList: (list: ToDoItem[]) => void;
};
export function AddItemButton({ list, title, setList }: AddItemButtonProps) {
  const addItem = () => {
    const id =
      list.length > 0 ? Math.max(...list.map((item) => item.id)) + 1 : 0;

    const newItem: ToDoItem = {
      id,
      title,
      done: false,
    };

    setList([...list, newItem]);
  };

  return <button onClick={addItem}>Add</button>;
}
