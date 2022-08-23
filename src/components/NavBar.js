import { useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { auth, logout, signInWithGoogle } from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = ({ categories, setCategory, setWarningCallback, warning }) => {
  console.log(categories);
  const options = ["", ...categories];
  const defaultOption = options[0];
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      console.log(user);
    }
  }, [user, loading]);

  const handleSelect = (event) => {
    if (event.value !== "") {
      setCategory(event.value);
    }
  };

  return (
    <nav>
      <button onClick={() => setCategory("")}>Home</button>
      {user ? (
        <Dropdown
          options={options}
          onChange={handleSelect}
          value={defaultOption}
          placeholder="Select A Category..."
        />
      ) : (
        <button className="button" onClick={signInWithGoogle}>
          <i className="fab fa-google"></i>Sign in with google
        </button>
      )}

      {user ? (
        <div>
          {/* <span>Logged in as {user.displayName}</span> */}
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        ""
      )}

      {warning.on ? (
        <button onClick={() => setWarningCallback({ on: false, message: "" })}>
          Clear Message
        </button>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavBar;
