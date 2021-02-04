import { RefObject, useEffect } from "react";

interface Props {
  ref: RefObject<HTMLElement>;
  focus?: boolean;
}

export const useSetFocus = ({ ref, focus }: Props) => {
  useEffect(() => {
    if (!focus || !ref.current) return;

    const tabIndex = ref.current.tabIndex;
    ref.current.setAttribute("tabindex", "-1");
    ref.current.focus();
    ref.current.setAttribute("tabindex", tabIndex.toString());
  }, [focus, ref]);
};
