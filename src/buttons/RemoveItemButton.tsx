import { ToDoItem } from "../App";

type RemoveItemButtonProps = {
  list: ToDoItem[];
  id: number;
  setList: (list: ToDoItem[]) => void;
};
export function RemoveItemButton({ list, id, setList }: RemoveItemButtonProps) {
  const removeItem = () => {
    const listWithoutItem = list.filter((item) => item.id !== id);

    setList(listWithoutItem);
  };
  return <button onClick={removeItem}>Remove</button>;
}
