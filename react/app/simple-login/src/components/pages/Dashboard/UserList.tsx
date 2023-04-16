import React from "react";
import { getUsers } from "../../hooks/getUsers";

import { UserType } from "../../types/api";

export const UserList = () => {
  const { users } = getUsers();

  if (users.isLoading) return <div>...loading</div>;

  return (
    <>
      <h1>UserList</h1>
      {users &&
        users.users.map((user: UserType) => {
          return (
            <li key={user.id}>
              {" "}
              {user.id} - {user.email}
            </li>
          );
        })}
    </>
  );
};
