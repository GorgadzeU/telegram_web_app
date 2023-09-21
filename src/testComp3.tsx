import { shallow } from "zustand/shallow";
import { useStore } from "./store";

const TestComp3 = () => {
  const [person, setPerson] = useStore(
    (state) => [state.person, state.setPerson],
    shallow
  );
  console.log("3___");
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.a.b ? "true" : "false"}</h1>

      <button onClick={() => setPerson({ ...person, name: "newName" })}>
        setname
      </button>
      <button onClick={() => setPerson({ ...person, a: { b: false } })}>
        setfalseS
      </button>
    </div>
  );
};

export default TestComp3;
