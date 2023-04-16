import React from "react";
import { getItems } from "../../hooks/getItems";

import { ItemType } from "../../types/api";

export const ItemList = () => {
  const { items } = getItems();

  if (items.isLoading) return <div>...loading</div>;

  return (
    <>
      <h1>ItemList (authentication required)</h1>
      {items &&
        items.items.map((item: ItemType) => {
          return (
            <li key={item.id}>
              {" "}
              {item.id} - {item.title}
            </li>
          );
        })}
    </>
  );
};
