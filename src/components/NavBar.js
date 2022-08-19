import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const NavBar = ({ categories, setCategory, setWarningCallback }) => {
  console.log(categories);
  const options = ["", ...categories];
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
      <button onClick={() => setWarningCallback({ on: false, message: "" })}>
        Clear Message
      </button>
    </nav>
  );
};

export default NavBar;
