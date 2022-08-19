import React, { useState } from "react";
//import LoginForm from "./components/LoginForm";
import TallySheet from "./components/TallySheet";
import NavBar from "./components/NavBar";
import NewCategoryForm from "./components/NewCategoryForm";
import "./App.css";
import _ from "lodash";

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
  const [data, setData] = useState(UserSheetData);
  const [category, setCategory] = useState("");
  const [warning, setWarning] = useState({ on: false, message: "" });

  const categories = data.map((sheet) => sheet.sheet_name);

  const tallySheetData = data.filter((sheet) => sheet.sheet_name === category);

  const addCategory = (category) => {
    if (categories.includes(category)) {
      setWarning({
        on: true,
        message: `${category} is already in the list of categories`,
      });
    } else {
      const new_id = data[data.length - 1].id + 1;
      const newData = _.cloneDeep(data);
      newData.push({
        sheet_name: category,
        id: new_id,
        sheet_image:
          "https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2019/01/2000px-React-icon.svg_.png?fit=2000%2C1413&ssl=1",
        items: [],
      });
      setData(newData);
    }
  };

  const addItem = (itemName) => {
    const items = tallySheetData[0].items;
    console.log(tallySheetData[0]);
    const item_names = items.map((item) => item.item_name);

    if (item_names.includes(itemName)) {
      setWarning({
        on: true,
        message: `${itemName} is already in the list of items`,
      });
    } else {
      const newData = _.cloneDeep(data);
      for (const dataSheet of newData) {
        if (category === dataSheet.sheet_name) {
          dataSheet.items.push({
            item_name: itemName,
            amount: 0,
            id: items[items.length - 1].id,
          });
        }
      }
      setData(newData);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 className="App-title">Tally Sheet</h1> */}
        {warning.on ? <h1>{warning.message}</h1> : ""}
        <NavBar
          categories={categories}
          setCategory={setCategory}
          setWarningCallback={setWarning}
        />
        <NewCategoryForm
          categories={categories}
          addCategoryCallback={addCategory}
          setCategoryCallback={setCategory}
          setWarningCallback={setWarning}
        ></NewCategoryForm>
        <div id="tally_sheet">
          {category ? (
            <TallySheet
              sheetData={tallySheetData[0]}
              addItemCallback={addItem}
            />
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
