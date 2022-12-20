import { ChangeEvent, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "./Button";
import { RemoveItemButton } from "./buttons/RemoveItemButton";
import { AddItemButton } from "./buttons/AddItemButton";
import { ToDoItem } from "./Item/ToDoItem";

export type ToDoItem = {
  id: number;
  title: string;
  done: boolean;
};

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  // const [estado, setEstado] = useState(valor Inicial);
  // const [toDoList, setToDoList] = useState<ToDoItem[]>(initialList);

  const [toDoList, setToDoList] = useState<ToDoItem[]>(() => {
    const strList = localStorage.getItem("toDoList");

    if (strList) {
      const list: ToDoItem[] = JSON.parse(strList);

      return list;
    }

    return [];
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const [ToDoTitle, setToDoTitle] = useState("");

  const handleToggleDone = (id: number) => {
    const newToDoList = toDoList.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });

    setToDoList(newToDoList);
  };

  useEffect(() => {
    const strList = JSON.stringify(toDoList);

    localStorage.setItem("toDoList", strList);
  }, [toDoList]);

  return (
    <div>
      <h1>Trem</h1>

      <h2>{counter}</h2>
      <Button
        onClick={() => setCounter((prevCounter) => (prevCounter += 1))}
        text="counter"
      />

      <input type="text" value={name} onChange={handleChange} />
      {/* funciona renderizado conforme vai mudando */}
      <div></div>
      <h3>{name}</h3>

      <div>
        <h2> To Do List</h2>
        <input
          type="text"
          value={ToDoTitle}
          onChange={(event) => {
            setToDoTitle(event.target.value);
          }}
        />

        <AddItemButton
          list={toDoList}
          setList={setToDoList}
          title={ToDoTitle}
        />

        {toDoList.map((toDoItem) => (
          <div key={toDoItem.id} className="listItens">
           <ToDoItem {...toDoItem}/>
            <RemoveItemButton
              id={toDoItem.id}
              list={toDoList}
              setList={setToDoList}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
