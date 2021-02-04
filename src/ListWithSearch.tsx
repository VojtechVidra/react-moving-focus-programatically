import { ClickAwayListener } from "@material-ui/core";
import { KeyboardEvent, useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { data } from "./data";
import { focusElement } from "./focusElement";
import { Item } from "./item";
import { ItemDetail } from "./ItemDetail";
import { ListItem } from "./ListItem";
import { SearchInput } from "./SearchInput";
import { useFocus } from "./useFocus";

interface Props {
  onItemSelect(item: Item): void;
}

export const ListWithSearch = ({ onItemSelect }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const ref = useRef<HTMLDivElement>(null);
  const { currentFocus, setCurrentFocus } = useFocus({
    itemsLength: data.length,
    rootRef: ref,
  });

  const focusedItem = useMemo(() => data[currentFocus], [currentFocus]);

  const handleItemClick = useCallback(
    (item: Item) => {
      onItemSelect(item);
      handleClose();
    },
    [onItemSelect, handleClose]
  );

  const handleWrapperKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        focusElement(document.body);
      } else if (e.key === "Enter") {
        handleItemClick(focusedItem);
        focusElement(document.body);
      }
    },
    [handleClose, handleItemClick, focusedItem]
  );

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <SWrapper ref={ref} onKeyDown={handleWrapperKeyDown}>
        <SearchInput onClick={handleOpen} />
        {open && (
          <SFlex>
            <div>
              <SUl>
                {data.map((item, index) => (
                  <ListItem
                    onClick={handleItemClick}
                    key={item.id}
                    focusIndex={index}
                    onFocus={setCurrentFocus}
                    focus={currentFocus === index}
                    data={item}
                  />
                ))}
              </SUl>
            </div>
            <div>
              <ItemDetail item={focusedItem} />
            </div>
          </SFlex>
        )}
      </SWrapper>
    </ClickAwayListener>
  );
};

const SUl = styled.ol`
  max-height: 200px;
  overflow-y: auto;
`;

const SWrapper = styled.div`
  display: inline-block;
`;

const SFlex = styled.div`
  display: flex;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  position: absolute;
  & > * {
    flex: 1;
    width: 500px;
    padding: 8px;
  }
`;
