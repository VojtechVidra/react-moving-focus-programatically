interface Props {
  onClick?(): void;
}

export const SearchInput = ({ onClick }: Props) => {
  return (
    <>
      <label htmlFor="search">Search</label>
      <br />
      <input
        onClick={onClick}
        id="search"
        placeholder="search.."
        autoComplete="off"
      />
    </>
  );
};
