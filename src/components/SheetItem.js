const SheetItem = ({ item, sheetData }) => {
  return (
    <li>
      {item} : {sheetData[item]}
    </li>
  );
};

export default SheetItem;
