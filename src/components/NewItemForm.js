import React, { useState } from "react";

const NewCategoryForm = ({ addItemCallback }) => {
  const [itemName, setItemName] = useState("");

  const submitItem = (e) => {
    e.preventDefault();
    addItemCallback(itemName);
    setItemName("");
  };

  return (
    <form className="form-inline card" onSubmit={submitItem}>
      <div className="form-group mx-sm-3 mb-2">
        <input
          className="form-control"
          id="item"
          name="item"
          placeholder="New Item..."
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Add Item
      </button>
    </form>
  );
};

export default NewCategoryForm;
