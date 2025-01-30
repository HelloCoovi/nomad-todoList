import { useForm } from 'react-hook-form';
import { useRecoilValue, useRecoilState } from "recoil";
import { categoryState, toDoState } from '../atoms';

interface IForm {
  toDo: string;
}
export default function CreateToDo() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    const newToDo = { text: toDo, id: Date.now(), category };

    setToDos((oldToDos) => [newToDo, ...oldToDos]);
    setValue('toDo', '');

    window.localStorage.setItem('todos', JSON.stringify([newToDo, ...toDos]));
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('toDo', {
          required: 'Please write a To Do',
        })}
        placeholder='Write a to do'
      />
      <button>Add</button>
    </form>
  );
}
