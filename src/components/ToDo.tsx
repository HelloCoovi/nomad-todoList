import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

type toDoCategory = 'TO_DO' | 'DOING' | 'DONE';

export default function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = event.currentTarget.name;

    setToDos((prevToDos) =>
      prevToDos.map((prevToDo) =>
        prevToDo.id === id
          ? { text, id, category: targetName as toDoCategory }
          : prevToDo
      )
    );
  };
  return (
    <li>
      <span>{text}</span>
      {category !== 'DOING' && (
        <button name='DOING' onClick={onClick}>
          Doing
        </button>
      )}
      {category !== 'TO_DO' && (
        <button name='TO_DO' onClick={onClick}>
          To Do
        </button>
      )}
      {category !== 'DONE' && (
        <button name='DONE' onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}
