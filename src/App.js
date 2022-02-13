import React, { useState } from "react";
//import LoginForm from "./components/LoginForm";
import TallySheet from "./components/TallySheet";
//import CategoryList from "./components/CategoryList";
import NavBar from "./components/NavBar";
import "./App.css";

const UserSheetData = [
  {
    name: "birds",
    items: [
      {
        name: "robin",
        amount: 5,
        id: 1,
      },
      {
        name: "bluejay",
        amount: 2,
        id: 2,
      },
    ],
  },
  {
    name: "trees",
    items: [
      {
        name: "fir",
        amount: 5,
        id: 1,
      },
      {
        name: "spruce",
        amount: 2,
        id: 2,
      },
    ],
  },
  {
    name: "flowers",
    items: [
      {
        name: "daisy",
        amount: 5,
        id: 1,
      },
      {
        name: "daffodil",
        amount: 2,
        id: 2,
      },
      {
        name: "rose",
        amount: 2,
        id: 3,
      },
    ],
  },
];

// const AllSheetData = {
//   birds: {
//     robin: 5,
//     bluejay: 4,
//     crow: 2,
//   },
//   trees: {
//     fir: 2,
//     pine: 5,
//     magnolia: 10,
//     cherry: 4,
//   },
//   physics: {
//     momentum: 2,
//   },
//   flowers: {
//     daisy: 2,
//     daffodil: 5,
//   },
// };

function App() {
  // const [username, setUserName] = useState("");
  const [category, setCategory] = useState("");
  // const [viewCategories, setViewCategories] = useState(false);
  // const viewHide = viewCategories ? "Hide" : "View";

  const categories = UserSheetData.map((sheet) => sheet.name);
  const tallySheetData = UserSheetData.filter(
    (sheet) => sheet.name === category
  );

  return (
    <div className="App">
      <header className="App-header">
        <NavBar categories={categories} setCategory={setCategory} />
        {category ? "" : <h1>Tally Sheet</h1>}
        <div id="tally_sheet">
          {category ? <TallySheet sheetData={tallySheetData[0]} /> : ""}
        </div>
        {/* <LoginForm name={name} setName={setName} /> */}
        {/* {name ? <CategoryList /> : "You must login to see Tally Sheets"} */}
        {/* <div>
          <nav>
            {category !== "" ? (
              <button onClick={() => setViewCategories(!viewCategories)}>
                {viewHide} Categories
              </button>
            ) : (
              ""
            )}
            {viewCategories || category === "" ? (
              <CategoryList categories={categories} setCategory={setCategory} />
            ) : (
              ""
            )}
          </nav>
        </div> */}
      </header>
    </div>
  );
}

export default App;
