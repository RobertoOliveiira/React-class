import { useState } from "react";
import { ToDoItem as ToDoItemProps } from "../App";

export function ToDoItem({ id, title, done }: ToDoItemProps) {
  const [isDone, setIsDone] = useState(done);

  return (
    <>
      <li onClick={() => setIsDone((prevValue)=> !prevValue)}>
        <h3>{title}</h3>
        {done ? <p>Done</p>:null}
      </li>
    </>
  );
}
