import SheetItem from "./SheetItem";

const TallySheet = ({ sheetData }) => {
  const tallyData = sheetData.items.map((item) => {
    return <SheetItem key={item.id} name={item.name} amount={item.amount} />;
  });

  return (
    <div>
      <h1>{sheetData.name}</h1>
      <ul>{tallyData}</ul>
    </div>
  );
};

export default TallySheet;
