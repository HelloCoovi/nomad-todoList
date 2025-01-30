import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { Categories, categoryState, toDoSelector, toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import { useEffect } from 'react';

/**  */
export default function ToDoList() {
  const currentCategoryToDos = useRecoilValue(toDoSelector);

  const setToDos = useSetRecoilState(toDoState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onSelectInput = (event: React.FocusEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };

  useEffect(() => {
    const todo = window.localStorage.getItem('todos');

    setToDos(JSON.parse(todo ?? ''));
  }, []);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onSelectInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {currentCategoryToDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}
