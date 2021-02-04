import { useRef } from "react";
import { useSetFocus } from "./useSetFocus";

interface Props {
  focus?: boolean;
}

export const SearchInput = ({ focus }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  useSetFocus({ focus, ref });

  return (
    <>
      <label htmlFor="search">Search</label>
      <br />
      <input ref={ref} id="search" placeholder="search.." />
    </>
  );
};
