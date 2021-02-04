import { memo, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { Item } from "./item";

interface Props {
  focus?: boolean;
  focusIndex?: number;
  data: Item;
  onFocus(focusIndex: number): void;
  onClick?(item: Item): void;
}

export const ListItem = memo(
  ({ focus, focusIndex, data, onFocus, onClick }: Props) => {
    const ref = useRef<HTMLLIElement>(null);

    useEffect(() => {
      if (!focus) return;

      ref.current?.scrollIntoView({ block: "nearest" });
    }, [focus]);

    const handleMouseOver = useCallback(() => {
      focusIndex !== undefined && onFocus(focusIndex);
    }, [focusIndex, onFocus]);

    const handleClick = useCallback(() => onClick && onClick(data), [
      onClick,
      data,
    ]);

    return (
      <SLi
        focused={focus}
        onMouseOver={handleMouseOver}
        onClick={handleClick}
        ref={ref}
      >
        {data.title}
      </SLi>
    );
  }
);

const SLi = styled.li<{ focused?: boolean }>`
  padding: 8px;
  cursor: pointer;
  color: ${({ focused }) => (focused ? "red" : undefined)};
`;
