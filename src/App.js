import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import TallySheet from "./components/TallySheet";
import CategoryList from "./components/CategoryList";
import "./App.css";

const AllSheetData = {
  birds: {
    robin: 5,
    bluejay: 4,
    crow: 2,
  },
  trees: {
    fir: 2,
    pine: 5,
    magnolia: 10,
    cherry: 4,
  },
  physics: {
    momentum: 2,
  },
  flowers: {
    daisy: 2,
    daffodil: 5,
  },
};

function App() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [viewCategories, setViewCategories] = useState(false);
  const viewHide = viewCategories ? "Hide" : "View";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tally Sheet</h1>
        {/* <LoginForm name={name} setName={setName} /> */}
        {/* {name ? <CategoryList /> : "You must login to see Tally Sheets"} */}
        <div>
          <nav>
            {category !== "" ? (
              <button onClick={() => setViewCategories(!viewCategories)}>
                {viewHide} Categories
              </button>
            ) : (
              ""
            )}
            {viewCategories || category === "" ? (
              <CategoryList
                categories={Object.keys(AllSheetData)}
                setCategory={setCategory}
              />
            ) : (
              ""
            )}
          </nav>
        </div>
        <div>
          {category ? (
            <TallySheet
              category={category}
              sheetData={AllSheetData[category]}
            />
          ) : (
            ""
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
