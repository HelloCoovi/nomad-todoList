import { useRecoilState } from 'recoil';
import { recoilTestAtom } from '../atoms';

/**  */
export default function Home() {
  const [recoilTest, setRecoilTest] = useRecoilState(recoilTestAtom);

  console.log(
    `\n┏━━━ 💡 💡 recoilTest 💡 💡 ━━━\n`,
    recoilTest,
    `\n┗━━━━━━ 💡 💡 💡 💡 💡 ━━━━━━━━━\n`
  );

  return (
    <div>
      <h2>This_is_Home</h2>
    </div>
  );
}
