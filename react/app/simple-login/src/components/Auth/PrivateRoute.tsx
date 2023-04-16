import React, { FC } from "react";

import { PrivateRoutePropsType } from "../types/auth";
import { useAuthUserContext } from "./AuthUser";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute: FC<PrivateRoutePropsType> = (props) => {
  const authUser = useAuthUserContext().user;
  const from = useLocation();

  let allowRoute = false;
  if (authUser) {
    allowRoute = props.allowroles
      ? props.allowroles.includes(authUser.role)
      : true;
  }

  if (!allowRoute) {
    return (
      <Navigate to={props.redirect} state={{ from: from }} replace={false} />
    );
  }

  return <>{props.component}</>;
};
