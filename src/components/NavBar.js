import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const NavBar = ({ categories, setCategory }) => {
  let options = categories;
  console.log(options);
  options = ["", ...options];

  const defaultOption = options[0];

  const handleSelect = (event) => {
    if (event.value !== "") {
      setCategory(event.value);
    }
  };

  return (
    <nav>
      <button onClick={() => setCategory("")}>Home</button>
      <Dropdown
        options={options}
        onChange={handleSelect}
        value={defaultOption}
        placeholder="Select A Category..."
      />
    </nav>
  );
};

export default NavBar;
