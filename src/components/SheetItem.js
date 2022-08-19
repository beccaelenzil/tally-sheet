import { useState } from "react";
import "./SheetItem.css";

const SheetItem = ({ name, amount }) => {
  const [count, setCount] = useState(amount);

  return (
    <div className="col-sm-6">
      <div className="card sheetItem">
        <li className="sheetItem__grid card-body">
          <h2 className="card-title">{name}</h2>
          <div id="change-buttons">
            <button
              type="button"
              className="btn btn-primary change-button"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +{/* ⬆️ */}
            </button>
            <p className="card-text"> {count}</p>
            <button
              type="button"
              className="btn btn-primary change-button"
              onClick={() => {
                count > 0 ? setCount(count - 1) : setCount(count);
              }}
            >
              -{/* ⬇️ */}
            </button>
          </div>
        </li>
      </div>
    </div>
  );
};

export default SheetItem;
