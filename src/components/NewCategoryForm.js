import React, { useState } from "react";

const NewCategoryForm = ({
  categories,
  addCategoryCallback,
  setCategoryCallback,
}) => {
  const [category, setCategory] = useState("");

  const submitCategory = (e) => {
    e.preventDefault();
    addCategoryCallback(category);
    //setCategoryCallback(category);
    setCategory("");
  };

  return (
    <form className="form-inline card" onSubmit={submitCategory}>
      <div className="form-group mx-sm-3 mb-2">
        <input
          className="form-control"
          id="category"
          name="category"
          placeholder="New Category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Add Category
      </button>
    </form>
  );
};

export default NewCategoryForm;
