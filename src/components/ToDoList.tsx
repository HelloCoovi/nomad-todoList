import { useRecoilState } from 'recoil';
import { toDoState } from '../atoms';

import { useForm } from 'react-hook-form';

interface IFormInput {
  toDo: string;
}

/**  */
export default function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const { register, handleSubmit, setValue } = useForm<IFormInput>();
  const handleValid = ({ toDo }: IFormInput) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: 'TO_DO' },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('toDo', {
            required: 'Please write a To Do',
          })}
          placeholder='Write a to do'
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}
