import { memo, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { Item } from "./item";
import { useSetFocus } from "./useSetFocus";

interface Props {
  focus?: boolean;
  focusIndex?: number;
  data: Item;
  onSelect(item: Item): void;
  onFocus(focusIndex: number): void;
}

export const ListItem = memo(
  ({ focus, focusIndex, data, onSelect, onFocus }: Props) => {
    const ref = useRef<HTMLLIElement>(null);
    useSetFocus({ focus, ref });

    useEffect(() => {
      if (!focus) return;

      onSelect(data);
    }, [focus, onSelect, data]);

    const handleMouseOver = useCallback(() => {
      onSelect(data);
      focusIndex && onFocus(focusIndex);
    }, [onSelect, data, focusIndex, onFocus]);

    return (
      <SLi onMouseOver={handleMouseOver} ref={ref}>
        {data.title}
      </SLi>
    );
  }
);

const SLi = styled.li`
  padding: 8px;
`;
