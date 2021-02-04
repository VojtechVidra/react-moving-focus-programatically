import { RefObject, useEffect, useState } from "react";

interface Props {
  itemsLength: number;
  initialFocus?: number;
  rootRef?: RefObject<HTMLElement>;
}

export const useFocus = ({ itemsLength, initialFocus = 0, rootRef }: Props) => {
  const [currentFocus, setCurrentFocus] = useState(initialFocus);
  useEffect(() => {
    const target = rootRef?.current;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        if (currentFocus === itemsLength - 1) return setCurrentFocus(0);
        setCurrentFocus((prev) => ++prev);
      } else if (e.key === "ArrowUp") {
        if (currentFocus === 0) return setCurrentFocus(itemsLength - 1);
        setCurrentFocus((prev) => --prev);
      }
    };

    if (target) target.addEventListener("keydown", handleKeydown);
    else window.addEventListener("keydown", handleKeydown);

    return () => {
      if (target) target.removeEventListener("keydown", handleKeydown);
      else window.removeEventListener("keydown", handleKeydown);
    };
  }, [currentFocus, itemsLength, rootRef]);

  useEffect(() => {
    const outsideOfList = currentFocus >= itemsLength;
    if (outsideOfList) {
      setCurrentFocus(itemsLength - 1);
    }
  }, [itemsLength, setCurrentFocus, currentFocus]);

  return { currentFocus, setCurrentFocus };
};
