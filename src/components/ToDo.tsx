import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atoms';

export default function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = event.currentTarget.name;

    setToDos((prevToDos) => {
      const newToDos = prevToDos.map((prevToDo) =>
        prevToDo.id === id
          ? { ...prevToDo, category: targetName as Categories }
          : prevToDo
      );
      localStorage.setItem("todos", JSON.stringify(newToDos));
      return newToDos;
    });
  };
  const onClickDelete = () => {
    setToDos((prevTodos) => {
      const newToDos = prevTodos.filter((toDo) => toDo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newToDos));
      return newToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}

      <button onClick={onClickDelete}>Delete</button>
    </li>
  );
}
