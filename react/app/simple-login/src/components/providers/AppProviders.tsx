import React, { FC } from "react";

import { AuthUserProvider } from "../Auth/AuthUser";
import { AppProvidersPropsType } from "../types/auth";

export const AppProviders: FC<AppProvidersPropsType> = (props) => {
  return (
    <>
      <AuthUserProvider>{props.children}</AuthUserProvider>
    </>
  );
};
