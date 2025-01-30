import { useRecoilValue, useRecoilState } from 'recoil';
import { categoryState, toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

/**  */
export default function ToDoList() {
  const currentCategoryToDos = useRecoilValue(toDoSelector);

  const [category, setCategory] = useRecoilState(categoryState);
  const onSelectInput = (event: React.FocusEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onSelectInput}>
        <option value='TO_DO'>To Do</option>
        <option value='DOING'>Doing</option>
        <option value='DONE'>Done</option>
      </select>
      <CreateToDo />
      {currentCategoryToDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}
