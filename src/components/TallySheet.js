import SheetItem from "./SheetItem";

const TallySheet = ({ category, sheetData }) => {
  const tallyData = Object.keys(sheetData).map((item) => {
    return <SheetItem sheetData={sheetData} item={item} />;
  });

  return (
    <div>
      <h1>{category}</h1>
      <ul>{tallyData}</ul>
    </div>
  );
};

export default TallySheet;
