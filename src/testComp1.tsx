import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { memo } from "react";

const TestComp1 = () => {
  const [name, setName] = useStore(
    (state) => [state.name, state.setName],
    shallow
  );

  console.log("1___");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default memo(TestComp1);
