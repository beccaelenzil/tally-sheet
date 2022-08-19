import React, { useState } from "react";
//import LoginForm from "./components/LoginForm";
import TallySheet from "./components/TallySheet";
import NavBar from "./components/NavBar";
import "./App.css";

const UserSheetData = [
  {
    sheet_name: "birds",
    id: 1,
    sheet_image:
      "https://chilternchatter.com/wp-content/uploads/2018/01/RED-Bird.jpg",
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
    sheet_image:
      "https://tse1.mm.bing.net/th?id=OIP.kiDyHvR3GFz4ne2fWVlTiQHaE7&pid=Api",
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
    sheet_image:
      "https://www.flowershopnetwork.com/blog/wp-content/uploads/2016/10/yay-770505-print.jpg",
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

  const categories = UserSheetData.map((sheet) => sheet.sheet_name);

  const tallySheetData = UserSheetData.filter(
    (sheet) => sheet.sheet_name === category
  );

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 className="App-title">Tally Sheet</h1> */}
        <NavBar categories={categories} setCategory={setCategory} />
        <div id="tally_sheet">
          {category ? (
            <TallySheet sheetData={tallySheetData[0]} />
          ) : (
            <div id="welcome" className="card">
              <h2>Welcome to TallySheet!</h2>
              <p className="card-text">
                Select a category to see your current tallies.
              </p>
            </div>
          )}
        </div>
      </header>
      {/* <LoginForm name={name} setName={setName} /> */}
      {/* {name ? <CategoryList /> : "You must login to see Tally Sheets"} */}
    </div>
  );
}

export default App;
