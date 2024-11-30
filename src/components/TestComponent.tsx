import { useAtom } from "jotai";
import { themeAtom } from "../stores/atoms/Atoms";
import { useExampleStore } from "../stores/Store";

export default function Atoms() {
  //global useEffect by Jotai
  const [theme, setTheme] = useAtom(themeAtom);

  return <div>{theme}</div>;
}

export function Zustand() {
  //useState, but global
  const [count, setCount] = useExampleStore((state) => state.count);
  //calling a global function
  const increment = useExampleStore((state) => state.increment);

  //get value
  const countOther = useExampleStore.getState().count;
  //setting value
  useExampleStore.setState({ count: 1 });

  return <div>{count}</div>;
}
