import { Item } from "./item";

interface Props {
  item?: Item;
}

export const ItemDetail = ({ item }: Props) => {
  return (
    <div>
      <h1>Item detail</h1>
      {item && (
        <p>
          {item.id}: {item.title}
        </p>
      )}
    </div>
  );
};
