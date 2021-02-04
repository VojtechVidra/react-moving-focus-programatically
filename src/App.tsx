import { useState } from "react";
import { Item } from "./item";
import { ListWithSearch } from "./ListWithSearch";

function App() {
  const [selectedItem, setSelectedItem] = useState<Item>();

  return (
    <>
      <ListWithSearch onItemSelect={setSelectedItem} />
      {selectedItem && (
        <div>
          Selected item: {selectedItem.id}: {selectedItem.title}
        </div>
      )}
    </>
  );
}

export default App;
