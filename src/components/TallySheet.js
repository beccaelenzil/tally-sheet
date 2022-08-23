import SheetItem from "./SheetItem";
import NewItemForm from "./NewItemForm";
import "./TallySheet.css";

const TallySheet = ({ sheetData, addItemCallback }) => {
  console.log(sheetData);
  const tallyData = sheetData.items.map((item) => {
    return (
      <SheetItem key={item.id} name={item.item_name} amount={item.amount} />
    );
  });

  return (
    <div id="tallySheet" className="card">
      <img
        className="card-img-top"
        src={sheetData.sheet_image}
        alt={sheetData.sheet_name}
      ></img>
      <NewItemForm addItemCallback={addItemCallback} />
      <div className="card-body row">
        <ul className="card-text">{tallyData}</ul>
      </div>
    </div>
  );

  //   {/* <div className="tallyData">
  //     <ul>{tallyData}</ul>
  //   </div> */}
  // );
};

export default TallySheet;
