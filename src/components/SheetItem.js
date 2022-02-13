import { useState } from "react";

const SheetItem = ({ name, amount }) => {
  const [count, setCount] = useState(amount);

  return (
    <li>
      {name} : {count}
      <div id="change-buttons">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ⬆️
        </button>
        <button
          onClick={() => {
            count > 0 ? setCount(count - 1) : setCount(count);
          }}
        >
          ⬇️
        </button>
      </div>
    </li>
  );
};

export default SheetItem;
