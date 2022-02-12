const CategoryList = ({ categories, setCategory }) => {
  const selectCategory = (category) => {
    setCategory(category);
    console.log(category);
  };

  const categoryArray = categories.map((category) => {
    return <button onClick={() => selectCategory(category)}>{category}</button>;
  });

  return <ul>{categoryArray}</ul>;
};

export default CategoryList;
