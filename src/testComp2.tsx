import { shallow } from "zustand/shallow";
import { useStore } from "./store";

const TestComp2 = () => {
  const [count, setCount] = useStore(
    (state) => [state.count, state.setCount],
    shallow
  );

  console.log("2___");
  return (
    <div>
      <button onClick={setCount}>ClickToCount</button>
      <h1>{count}</h1>
    </div>
  );
};

export default TestComp2;
