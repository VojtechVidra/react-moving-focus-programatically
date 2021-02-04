import styled from "styled-components";
import { useState } from "react";
import { Item } from "./item";
import { ListWithSearch } from "./ListWithSearch";
import { ItemDetail } from "./ItemDetail";

function App() {
  const [selectedItem, setSelectedItem] = useState<Item>();

  return (
    <SWrapper>
      <ListWithSearch onSelectItem={setSelectedItem} />
      <ItemDetail item={selectedItem} />
    </SWrapper>
  );
}

export default App;

const SWrapper = styled.div`
  display: flex;
  & > * {
    flex: 1;
  }
`;
