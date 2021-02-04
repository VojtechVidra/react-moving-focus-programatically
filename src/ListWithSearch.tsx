import { useRef } from "react";
import styled from "styled-components";
import { data } from "./data";
import { Item } from "./item";
import { ListItem } from "./ListItem";
import { SearchInput } from "./SearchInput";
import { useFocus } from "./useFocus";

interface Props {
  onSelectItem(item: Item): void;
}

export const ListWithSearch = ({ onSelectItem }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { currentFocus, setCurrentFocus } = useFocus({
    itemsLength: data.length + 1,
    rootRef: ref,
  });

  return (
    <div ref={ref}>
      <SearchInput focus={currentFocus === 0} />

      <SUl>
        {data.map((item, index) => {
          const focusIndex = index + 1;
          return (
            <ListItem
              key={item.id}
              focusIndex={focusIndex}
              focus={focusIndex === currentFocus}
              data={item}
              onSelect={onSelectItem}
              onFocus={setCurrentFocus}
            />
          );
        })}
      </SUl>
    </div>
  );
};

const SUl = styled.ol`
  max-height: 200px;
  overflow-y: auto;
`;
