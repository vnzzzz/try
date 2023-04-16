import React from "react";

import { UserList } from "./UserList";
import { ItemList } from "./ItemList";

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <p>this is dashboard</p>
      <UserList />
      <ItemList />
    </>
  );
};
