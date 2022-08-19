import React, { useState } from "react";
//import LoginForm from "./components/LoginForm";
import TallySheet from "./components/TallySheet";
import OldNavBar from "./components/OldNavBar";
import "./App.css";

const UserSheetData = [
  {
    sheet_name: "birds",
    id: 1,
    items: [
      {
        item_name: "robin",
        amount: 5,
        id: 1,
      },
      {
        item_name: "bluejay",
        amount: 2,
        id: 2,
      },
    ],
  },
  {
    sheet_name: "trees",
    id: 2,
    items: [
      {
        item_name: "fir",
        amount: 5,
        id: 1,
      },
      {
        item_name: "spruce",
        amount: 2,
        id: 2,
      },
    ],
  },
  {
    sheet_name: "flowers",
    id: 3,
    items: [
      {
        item_name: "daisy",
        amount: 5,
        id: 1,
      },
      {
        item_name: "daffodil",
        amount: 2,
        id: 2,
      },
      {
        item_name: "rose",
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

  const categories = UserSheetData.map((sheet) => sheet.sheet_name);
  const tallySheetData = UserSheetData.filter(
    (sheet) => sheet.sheet_name === category
  );

  return (
    <div className="App">
      <header className="App-header">
        <OldNavBar categories={categories} setCategory={setCategory} />
        {category ? "" : <h1>Tally Sheet</h1>}
        <div id="tally_sheet">
          {category ? <TallySheet sheetData={tallySheetData[0]} /> : ""}
        </div>
        {/* <LoginForm name={name} setName={setName} /> */}
        {/* {name ? <CategoryList /> : "You must login to see Tally Sheets"} */}
      </header>
    </div>
  );
}

export default App;
