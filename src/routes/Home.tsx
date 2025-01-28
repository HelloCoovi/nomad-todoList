import { useRecoilState } from 'recoil';
import { recoilTestAtom } from '../atoms';

import { useForm } from 'react-hook-form';

interface FormInput {
  userId: string;
  userPw: string;
  userNickName?: string;
  userAge?: number;
}

/**  */
export default function Home() {
  const [recoilTest, setRecoilTest] = useRecoilState(recoilTestAtom);
  console.log(
    `\n┏━━━ 💡 💡 recoilTest 💡 💡 ━━━\n`,
    recoilTest,
    `\n┗━━━━━━ 💡 💡 💡 💡 💡 ━━━━━━━━━\n`
  );

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<FormInput>({
    defaultValues: {
      userNickName: '심심한 비둘기',
    },
  });

  const onValid = (data: FormInput) => {
    if (data.userNickName === 'coovi') {
      setError(
        'userNickName',
        { message: 'coovi는 개발자 닉네임 입니다.' },
        { shouldFocus: true } // 해당 위치로 커서 이동
      );
    }
  };

  return (
    <div>
      <h2>This_is_Home</h2>

      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <label htmlFor='userId'>ID</label>
          <input
            {...register('userId', {
              required: '필수 입력 값입니다.',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                message: 'navar 이메일만 받습니다.',
              },
              maxLength: {
                value: 100,
                message: '이메일이 너무 길어요',
              },
            })}
            type='text'
            id='userId'
          />
          <p>{errors?.userId?.message}</p>
        </div>

        <div>
          <label htmlFor='userPw'>PW</label>
          <input
            {...register('userPw', {
              required: '필수 입력 값입니다.',
              minLength: {
                value: 4,
                message: '길이는 최소 4글자 입니다.',
              },
            })}
            type='text'
            id='userPw'
          />
          <p>{errors?.userPw?.message}</p>
        </div>

        <div>
          <label htmlFor='userNickName'>Nick Name</label>
          <input
            {...register('userNickName', {
              minLength: {
                value: 4,
                message: '길이는 최소 4글자 입니다.',
              },
            })}
            type='text'
            id='userNickName'
          />
          <p>{errors?.userNickName?.message}</p>
        </div>

        <div>
          <label htmlFor='userAge'>Age</label>
          <input
            {...register('userAge', {
              min: {
                value: 1,
                message: '1살 이상부터 이 서비스를 이용 가능합니다.',
              },
            })}
            type='number'
            id='userAge'
          />
          <p>{errors?.userAge?.message}</p>
        </div>

        <input type='submit' value={'제출하기'} />
      </form>
    </div>
  );
}
