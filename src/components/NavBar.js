import { eventWrapper } from "@testing-library/user-event/dist/utils";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const NavBar = ({ categories, setCategory }) => {
  let options = categories;
  options = ["Select TallySheet", ...options];

  const defaultOption = options[0];

  const handleSelect = (event) => {
    if (event.value !== "Select TallySheet") {
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
        placeholder="Select a TallySheet"
      />
    </nav>
  );
};

export default NavBar;
