import { useState } from "react";

const SheetItem = ({ name, amount }) => {
  const [count, setCount] = useState(amount);

  return (
    <li>
      {name} : {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ⬆️
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        ⬇️
      </button>
    </li>
  );
};

export default SheetItem;
